import { Link } from "react-router-dom";
import AdminNav from "../../../../AdminPanel/AdminNav";
import SearchPanel from "../../../SearchPanel/SearchPanel";

const AdminLeedsList = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile and medium device sidebar toggle button */}
      <AdminNav />

      {/* ----------------Main content -------------------*/}
      <div className="flex-1 flex flex-col overflow-hidden bg-[#25476a]">
        <SearchPanel />

        {/* Page content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div>
            <h1
              style={{ fontFamily: "Taviraj, serif" }}
              className="text-center font-semibold text-3xl mt-[50px] mb-[10px]"
            >
              Leeds List
            </h1>
            <hr className="border border-gray-300 mb-[50px]" />
            {/* Table Section   */}
            <div className="overflow-x-auto">
              <Link to="/AdminLeedsAdd">
                <button className="btn btn-md bg-info uppercase ms-[10px] mb-[10px]">
                  Add
                </button>
              </Link>
              <table className="table">
                {/* head */}
                <thead className="bg-gray-500 text-white">
                  <tr>
                    <th>index</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Birthdate</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th>1</th>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>Blue</td>
                    <td className="flex gap-5">
                    <Link to={`/AdminLeedsEdit/$`}>
                      <button className="btn btn-sm bg-success uppercase  mb-[10px]">
                        Edit
                      </button>
                    </Link>
                      <button className="btn btn-sm bg-error uppercase  mb-[10px]">
                        Delete
                      </button>
                      <button className="btn btn-sm bg-warning uppercase  mb-[10px]">
                        Details
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLeedsList;
