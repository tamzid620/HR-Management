import { useState } from "react";
import { PieChart, Pie, Cell } from "recharts";
import { FaDotCircle } from "react-icons/fa";

const ChartTwo = () => {
  const [selectedOption, setSelectedOption] = useState("daily");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className="lg:ms-5 md:ms-4 sm: ms-5 lg:w-[450px] md:w-full sm: w-[340px] p-5  rounded-md shadow-md shadow-gray-500  bg-white">
      <div className="flex justify-between">
        <h1 className=" font-bold text-lg">Used Device</h1>
        {/* sort option  */}
        <div>
          <label className="mr-2">Sort by:</label>
          <select value={selectedOption} onChange={handleChange}>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
      </div>
    
      <div className="lg:ms-0 md:ms-[170px] sm: -ms-[40px]">
        <PieChart width={800} height={380}>
          <Pie
            data={data}
            cx={200}
            cy={150}
            innerRadius={110}
            outerRadius={140}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm: grid-cols-2 gap-5 
      lg:ms-0 md:ms-[170px] sm: ms-[40px]">
        <h1 className="flex gap-3 items-center">
          <FaDotCircle className="text-[#0088FE]" /> <span>Mobile</span>
        </h1>
        <h1 className="flex gap-3 items-center">
          <FaDotCircle className="text-[#00C49F]" /> <span>Tablet</span>
        </h1>
        <h1 className="flex gap-3 items-center">
          <FaDotCircle className="text-[#FFBB28]" /> <span>Dekstop</span>
        </h1>
        <h1 className="flex gap-3 items-center">
          <FaDotCircle className="text-[#FF8042]" /> <span>laptop</span>
        </h1>
      </div>
    </div>
  );
};

export default ChartTwo;
