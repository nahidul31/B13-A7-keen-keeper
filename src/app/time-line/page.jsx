"use client";

import { Context } from "@/contexts/AuthContext";
import Image from "next/image";
import { useContext, useState } from "react";

const TimeLinePage = () => {
  const { selectedFriend } = useContext(Context);
  console.log(selectedFriend);
  const [filter, setFilter] = useState("all");

  const filteredData =
    filter === "all"
      ? selectedFriend
      : selectedFriend?.filter(
          (item) => item.action.toLowerCase() === filter.toLowerCase(),
        );

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mt-10">Time Line</h2>

      <div className="mt-5">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="select select-bordered w-52"
        >
          <option value="all">All</option>
          <option value="Text">Text</option>
          <option value="Video">Video Call</option>
          <option value="Call">Call</option>
        </select>
      </div>

      <div className="mt-6 space-y-4">
        {filteredData?.length > 0 ? (
          filteredData.map((friend, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl shadow-sm bg-white flex gap-6 items-center hover:shadow-md transition"
            >
              <Image
                src={friend.icon}
                alt={friend.action}
                width={45}
                height={45}
                className="rounded-full"
              />

              <div>
                <h1 className="font-semibold text-gray-600">
                  <span className="text-xl font-bold text-black">
                    {friend.action}
                  </span>{" "}
                  with {friend.name}
                </h1>

                <p className="text-sm text-gray-400 mt-1">{friend.date}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="mt-10">
            <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-3xl px-10 py-12 text-center">
              <p className="text-2xl font-bold text-gray-600">
                No timeline data found
              </p>

              <p className="text-sm text-gray-400 mt-2">
                Please add some activity to see your timeline
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimeLinePage;
