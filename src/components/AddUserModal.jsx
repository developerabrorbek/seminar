import toast from "react-hot-toast";

const AddUserModal = () => {
  const handleAddUser = async (e) => {
    e.preventDefault();

    const firstUsers = JSON.parse(localStorage.getItem("users")) || [];

    const name = e.target.name.value;
    const number = e.target.number.value;
    const work = e.target.work.value;

    const data = [
      ...firstUsers,
      {
        tartib_raqam: firstUsers?.length ? firstUsers.at(-1).tartib_raqam + 1 : 1,
        name,
        number,
        work,
      },
    ];

    toast.success("Ishtirokchi qo'shildi")

    localStorage.setItem("users", JSON.stringify(data));

    setTimeout(() => {
      window.location.reload();
    }, 1000)
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-success"
        data-bs-toggle="modal"
        data-bs-target="#ishtirokchiqushish"
      >
        Ishtirokchi qo&apos;shing
      </button>

      <div
        className="modal fade"
        id="ishtirokchiqushish"
        tabIndex="-1"
        aria-labelledby="ishtirokchiqushishLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="ishtirokchiqushishLabel">
                Ishtirokchi ma&apos;lumotlarini kiriting
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleAddUser}>
                <label htmlFor="ism" className="d-block">
                  <span>To&apos;liq ismi:</span>
                  <input
                    type="text"
                    id="ism"
                    required
                    className="form-control"
                    placeholder="Ismini kiriting:"
                    name="name"
                  />
                </label>
                <label htmlFor="nomer" className="d-block">
                  <span>Telefon nomer:</span>
                  <input
                    type="text"
                    id="nomer"
                    required
                    className="form-control"
                    name="number"
                    placeholder="Nomerni kiriting:"
                  />
                </label>
                <label htmlFor="work_place" className="d-block mb-4">
                  <span>Ish joyini kiriting:</span>
                  <input
                    type="text"
                    id="work_place"
                    required
                    name="work"
                    className="form-control"
                    placeholder="Ish joyini kiriting:"
                  />
                </label>
                <div className="d-flex justify-content-end gap-3">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Yopish
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Saqlash
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUserModal;
