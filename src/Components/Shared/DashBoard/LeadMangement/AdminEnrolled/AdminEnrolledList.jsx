import { Link } from "react-router-dom";
import AdminNav from "../../../../AdminPanel/AdminNav";
import SearchPanel from "../../../SearchPanel/SearchPanel";


const AdminEnrolledList = () => {
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
                Enrolled Student List
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
                      <td><img className="w-[70px] h-[70px] rounded-full" src="https://i2.wp.com/mrkoachman.com/wp-content/uploads/2015/10/mrkoachman_blog-9.jpg" alt="" /></td>
                      <td>Cy Ganderton</td>
                      <td>Quality Control Specialist</td>
                      <td>Blue</td>
                      <td className="flex mt-[19px] gap-5">
                      {/* <Link to={`/AdminEnrolledEdit/${leed.id}`}> */}
                        <button className="btn btn-sm bg-success uppercase  mb-[10px]">
                          Edit
                        </button>
                      {/* </Link> */}
                        <button className="btn btn-sm bg-error uppercase  mb-[10px]">
                          Delete
                        </button>
                        <Link to="/AdminEnrolledDetails">
                        <button className="btn btn-sm bg-warning uppercase  mb-[10px]">
                          Details
                        </button>
                        </Link>
                      </td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                      <th>1</th>
                      <td><img className="w-[70px] h-[70px] rounded-full" src="https://i2.wp.com/mrkoachman.com/wp-content/uploads/2015/10/mrkoachman_blog-9.jpg" alt="" /></td>
                      <td>Cy Ganderton</td>
                      <td>Quality Control Specialist</td>
                      <td>Blue</td>
                      <td className="flex mt-[19px] gap-5">
                      {/* <Link to={`/AdminEnrolledEdit/${leed.id}`}> */}
                        <button className="btn btn-sm bg-success uppercase  mb-[10px]">
                          Edit
                        </button>
                      {/* </Link> */}
                        <button className="btn btn-sm bg-error uppercase  mb-[10px]">
                          Delete
                        </button>
                        <Link to="/AdminEnrolledDetails">
                        <button className="btn btn-sm bg-warning uppercase  mb-[10px]">
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

export default AdminEnrolledList;