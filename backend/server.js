const express = require("express");
const mongoose = require("mongoose");
const UserRoute = require("./router/usersRouter");


const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;

mongoose
  .connect(
    "mongodb+srv://roihan:3rB86t74jf8ZjoJc@cluster0.atpaeyo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("MongoDB Connected...");
  })
  .catch((err) => {
    console.log(
      "MongoDB connection error. Please make sure MongoDB is running. " + err
    );
    process.exit();
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/users", UserRoute);

app.listen(3000, () => {
  console.log("Server listening on port 3000!");
});
