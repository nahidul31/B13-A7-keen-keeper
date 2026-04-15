"use client";

import React, { useContext } from "react";
import { Context } from "@/contexts/AuthContext";
import { PieChart, Pie, Tooltip, Legend } from "recharts";

const StatsPage = () => {
  const { selectedFriend } = useContext(Context);

  const getChartData = (data) => {
    const counts = {
      text: 0,
      video: 0,
      call: 0,
    };

    data?.forEach((item) => {
      const action = item.action.toLowerCase();

      if (action === "text") counts.text++;
      else if (action === "video") counts.video++;
      else if (action === "call") counts.call++;
    });

    return [
      { name: "Text", value: counts.text, fill: "#0088FE" },
      { name: "Video Call", value: counts.call, fill: "#00C49F" },
      { name: "Audio Call", value: counts.video, fill: "#FFBB28" },
    ];
  };

  const chartData = getChartData(selectedFriend);

  const hasData = chartData.some((item) => item.value > 0);

  return (
    <div className="p-2 sm:p-6 mt-10  max-h-screen">
      <h1 className="text-3xl font-bold ">By Interaction Type</h1>

      <div>
        {hasData ? (
          <div className="flex justify-center">
            <PieChart width={400} height={400}>
              <Pie
                data={chartData}
                innerRadius={80}
                outerRadius={120}
                paddingAngle={5}
                dataKey="value"
              />
              <Tooltip />
              <Legend />
            </PieChart>
          </div>
        ) : (
          <div className=" mt-10">
            <div className="backdrop-blur-md r  rounded-3xl px-10 py-20 text-center ">
              <p className="text-2xl font-bold text-gray-600">
                No statistics data found
              </p>
              <p className="text-sm text-gray-400 mt-2">
                Add some activity to see analytics here
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsPage;
