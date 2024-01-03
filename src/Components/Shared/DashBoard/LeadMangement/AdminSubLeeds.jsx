import AdminNav from "../../../AdminPanel/AdminNav";
import SearchPanel from "../../SearchPanel/SearchPanel";


const AdminSubLeeds = () => {
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
              
            </div>
          </main>
        </div>
      </div>
    );
};

export default AdminSubLeeds;