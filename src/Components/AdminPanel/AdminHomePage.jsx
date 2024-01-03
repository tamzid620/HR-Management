import ChartOne from "../Shared/ChartFiles/ChartOne";
import ChartTwo from "../Shared/ChartFiles/ChartTwo";
import DpTable from "../Shared/DpTable";
import NumberStatus from "../Shared/NumberStatus";


const AdminHomePage = () => {
    return (
        <div>
             <NumberStatus />
          <div className="grid lg:grid-cols-2 md:grid-cols-1 sm: grid-cols-1 mt-10">
            <ChartOne />
            <ChartTwo />
          </div>
          <DpTable/>
        </div>
    );
};

export default AdminHomePage;