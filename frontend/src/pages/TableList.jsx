const TableList = () => {
  return (
    <>
      <div className="text-gray-900 bg-gray-200">
        <div className="p-4 flex">
          <h1 className="text-3xl">Users</h1>
        </div>

        <div className="px-3 py-4 flex justify-center">
            <table className="w-full text-md bg-white shadow-md rounded mb-4">
                <tbody>
                    <tr className="border-b">
                        <th className="text-left p-3 px-5">Name</th>
                        <th className="text-left p-3 px-5">Email</th>
                        <th className="text-left p-3 px-5">Action</th>
                    </tr>

                    <tr className="border-b hover:bg-orange-100 bg-gray-100">
                        <td className="p-3 px-5">John</td>
                        <td className="p-3 px-5">qKjZz@example.com</td>
                        <td className="p-3 px-5 flex jutify-end"><button className="mr-3 text-sm bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Edit</button></td>
                    </tr>
                </tbody>
            </table>

        </div>
      </div>
    </>
  );
};

export default TableList;
