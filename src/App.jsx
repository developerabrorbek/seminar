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
    <div className="shadow m-5 p-5 flex-row gap-5 justify-content-center">
      <h2>Seminar ishtirokchilari</h2>
      <div className="">
        <div className="d-flex gap-4 justify-content-end">
          <button className="btn btn-primary" onClick={handleDownload}>
            Excel yuklash
          </button>
          <AddUserModal />
        </div>
        <table className="table w-full">
          <thead>
            <tr>
              <th scope="col">№</th>
              <th scope="col">FIO</th>
              <th scope="col">Telefon nomeri</th>
              <th scope="col">Ish joyi</th>
              <th scope="col">O&apos;chirish</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <>
                  <tr>
                    {" "}
                    <th scope="row">{user.tartib_raqam}</th>
                    <td>{user.name}</td>
                    <td>{user.number}</td>
                    <td>{user.work}</td>
                    <td
                      type="button"
                      onClick={() => handleDelete(user.tartib_raqam)}
                    >
                      <img width={29} src={DeleteImg} alt="Delete user" />
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;