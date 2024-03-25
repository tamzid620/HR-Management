import AdminNav from "../../../../AdminPanel/AdminNav";
import SearchPanel from "../../../SearchPanel/SearchPanel";

const AdminLeedsEdit = () => {
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
              Leeds Update
            </h1>
            <hr className="border border-gray-300" />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLeedsEdit;
