import { useState } from "react";
import AddUserModal from "./components/AddUserModal";
import { download, writeRecords } from "./utils/read-csv";
import DeleteImg from "/delete.png";

const App = () => {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );

  const handleDownload = () => {
    const records = writeRecords(JSON.parse(localStorage.getItem("users")));

    download(records);
  };

  const handleDelete = (tartib_raqam) => {
    if (tartib_raqam) {
      const users = JSON.parse(localStorage.getItem("users"));

      const newUsers = users.filter((u) => u.tartib_raqam != tartib_raqam);

      localStorage.setItem("users", JSON.stringify(newUsers));

      window.location.reload();
    }
  };

  return (
    <div className="m-2 p-2 flex-row w-full gap-5 justify-content-center">
      <h2 className="mb-4">Seminar ishtirokchilari ro&apos;yhati:</h2>
      <div>
        <div className="d-flex flex-row gap-2 mb-3 justify-content-end">
          <button className="btn btn-primary" onClick={handleDownload}>
            Excel
          </button>
          <AddUserModal />
        </div>
        <div className="overflow-scroll">
          <table className="table table-bordered table-hover">
            <thead className="table-primary">
              <tr>
                <th scope="col">№</th>
                <th scope="col">FIO</th>
                <th scope="col">Telefon nomeri</th>
                <th scope="col">Ish joyi</th>
                <th scope="col">O&apos;chirish</th>
              </tr>
            </thead>
            <tbody>
              {users?.length && users.map((user) => {
                return (
                  <>
                    <tr>
                      {" "}
                      <th scope="row">{user.tartib_raqam}</th>
                      <td>{user.name}</td>
                      <td>{user.number}</td>
                      <td>{user.work}</td>
                      <td onClick={() => handleDelete(user.tartib_raqam)}>
                        <div>
                          <img width={29} src={DeleteImg} alt="Delete user" />{" "}
                        </div>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default App;
