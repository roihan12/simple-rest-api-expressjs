const UserModel = require("../model/users");

exports.create = async (req, res) => {
  if (!req.body.name && !req.body.email) {
    res.status(400).send({ message: "Content can not be empty!" });
  }

  const existingUser = await UserModel.findOne({
    $or: [{ email: req.body.email }, { name: req.body.name }],
  });

  if (existingUser) {
    return res
      .status(409)
      .send({ message: "User with the same email or name already exists" });
  }

  const user = new UserModel({
    name: req.body.name,
    email: req.body.email,
  });

  await user
    .save(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the user.",
      });
    });
};

exports.findAll = async (req, res) => {
  try {
    const user = await UserModel.find();
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.findOne = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.update = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const id = req.params.id;
  await UserModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update User with id=${id}. Maybe User was not found!`,
        });
      } else
        res.send({
          message: "User was updated successfully.",
        });
    })
    .catch((err) => {
      res.status(500).send({ message: "Error updating User with id=" + id });
    });
};

exports.delete = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    return res.status(200).send({ message: "User deleted successfully" });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
