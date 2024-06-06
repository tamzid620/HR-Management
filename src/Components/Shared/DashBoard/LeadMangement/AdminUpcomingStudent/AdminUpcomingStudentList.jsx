import { Link, useNavigate } from "react-router-dom";
import AdminNav from "../../../../AdminPanel/AdminNav";
import SearchPanel from "../../../SearchPanel/SearchPanel";
import { useEffect } from "react";
import Swal from "sweetalert2";

const AdminUpcomingStudent = () => {
  
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (!token && user?.role === "1") {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "You have to Login first",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/adminLogin");
    } else {
      ("");
    }
  }, [navigate]);

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
              Upcoming Student List
            </h1>
            <hr className="border border-gray-300 mb-[50px]" />
            {/* ------------------------Table Section -------------------------  */}
            <div className="overflow-x-auto flex justify-center">
              <table className="table table-zebra ">
                {/* head */}
                <thead className="bg-gray-500 text-white">
                  <tr>
                    <th>index</th>
                    <th>image</th>
                    <th>Name</th>
                    <th>phone No</th>
                    <th>Email</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th>1</th>
                    <td>
                      <img
                        className="w-[70px] h-[70px] rounded-full"
                        src="https://i2.wp.com/mrkoachman.com/wp-content/uploads/2015/10/mrkoachman_blog-9.jpg"
                        alt=""
                      />
                    </td>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>Blue</td>
                    <td className="flex mt-[19px] gap-5">
                      {/* <Link to={`/adminUpcomingStudentsEdit/${leed.id}`}> */}
                      <button className="btn btn-sm border-green-500 border-2 uppercase  mb-[10px]">
                        Edit
                      </button>
                      {/* </Link> */}
                      <button className="btn btn-sm border-red-500 border-2 uppercase mb-[10px]">
                        Delete
                      </button>
                      <Link to="/adminUpcomingStudentsDetails">
                        <button className="btn btn-sm border-yellow-500 border-2 uppercase mb-[10px]">
                          Details
                        </button>
                      </Link>
                    </td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <th>1</th>
                    <td>
                      <img
                        className="w-[70px] h-[70px] rounded-full"
                        src="https://i2.wp.com/mrkoachman.com/wp-content/uploads/2015/10/mrkoachman_blog-9.jpg"
                        alt=""
                      />
                    </td>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>Blue</td>
                    <td className="flex mt-[19px] gap-5">
                      {/* <Link to={`/adminUpcomingStudentsEdit/${leed.id}`}> */}
                      <button className="btn btn-sm border-green-500 border-2 uppercase  mb-[10px]">
                        Edit
                      </button>
                      {/* </Link> */}
                      <button className="btn btn-sm border-red-500 border-2 uppercase mb-[10px]">
                        Delete
                      </button>
                      <Link to="/adminUpcomingStudentsDetails">
                        <button className="btn btn-sm border-yellow-500 border-2 uppercase mb-[10px]">
                          Details
                        </button>
                      </Link>
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

export default AdminUpcomingStudent;
