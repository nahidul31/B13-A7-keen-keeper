"use client";
import { useParams } from "next/navigation";
import { friends } from "@/data/friends";
import Image from "next/image";
import { useContext } from "react";
import { Context } from "@/contexts/AuthContext";

const FriendDetailsClient = () => {
  const { id } = useParams();
  const { selectedFriend, setSelectedFriend } = useContext(Context);

  const friendInformation = friends.find((item) => item.id == id);

  const {
    name,
    picture,
    email,
    days_since_contact,
    status,
    tags,
    bio,
    goal,
    next_due_date,
  } = friendInformation;

  const handleQuickDiv = (op) => {
    const today = new Date().toLocaleDateString();

    const operation = {
      name: name,
      action: op.operation,
      icon: op.icon,
      date: today,
    };

    const newData = [...selectedFriend, operation];
    setSelectedFriend(newData);
  };

  return (
    <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* left div */}
      <div className="card bg-base-100 shadow-xl p-6 items-center text-center">
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src={picture} alt={name} />
          </div>
        </div>

        <h2 className="text-xl font-bold mt-3">{name}</h2>

        <div className="flex gap-2 mt-2">
          <span className="badge badge-error">{status}</span>
          {tags?.map((tag, i) => (
            <span key={i} className="badge badge-success">
              {tag}
            </span>
          ))}
        </div>

        <p className="text-sm text-gray-500 mt-3 italic">"{bio}"</p>
        <p className="text-xs text-gray-400 mt-1">Preferred: email</p>

        <div className="mt-6 w-full space-y-2">
          <button className="btn btn-outline w-full">Snooze 2 Weeks</button>
          <button className="btn btn-outline w-full">Archive</button>
          <button className="btn btn-error btn-outline w-full">Delete</button>
        </div>
      </div>

      {/* right div */}
      <div className="lg:col-span-2 space-y-6">
        {/* stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="stat bg-base-100 shadow rounded-xl">
            <div className="stat-title">Days Since Contact</div>
            <div className="stat-value">{days_since_contact}</div>
          </div>

          <div className="stat bg-base-100 shadow rounded-xl">
            <div className="stat-title">Goal (Days)</div>
            <div className="stat-value">{goal}</div>
          </div>

          <div className="stat bg-base-100 shadow rounded-xl">
            <div className="stat-title">Next Due</div>
            <div className="stat-value text-sm">{next_due_date}</div>
          </div>
        </div>

        {/* relationship goal */}
        <div className="card bg-base-100 shadow p-5">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-lg">Relationship Goal</h2>
            <button className="btn btn-sm btn-outline">Edit</button>
          </div>
          <p className="mt-2 text-gray-600">
            Connect every <b>{goal}</b> days
          </p>
        </div>

        {/* quick check-in */}
        <div className="card bg-base-100 shadow p-5">
          <h2 className="font-semibold text-lg mb-4">Quick Check-In</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div
              onClick={() =>
                handleQuickDiv({ operation: "Call", icon: "/img/call.png" })
              }
              className="flex flex-col items-center justify-center bg-gray-100 rounded-xl py-6 hover:bg-gray-200 cursor-pointer transition"
            >
              <Image src="/img/call.png" alt="Call" width={30} height={30} />
              <span className="mt-2 text-sm font-medium">Call</span>
            </div>

            <div
              onClick={() =>
                handleQuickDiv({ operation: "Text", icon: "/img/text.png" })
              }
              className="flex flex-col items-center justify-center bg-gray-100 rounded-xl py-6 hover:bg-gray-200 cursor-pointer transition"
            >
              <Image src="/img/text.png" alt="Text" width={30} height={30} />
              <span className="mt-2 text-sm font-medium">Text</span>
            </div>

            <div
              onClick={() =>
                handleQuickDiv({ operation: "Video", icon: "/img/video.png" })
              }
              className="flex flex-col items-center justify-center bg-gray-100 rounded-xl py-6 hover:bg-gray-200 cursor-pointer transition"
            >
              <Image src="/img/video.png" alt="Video" width={30} height={30} />
              <span className="mt-2 text-sm font-medium">Video</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetailsClient;
