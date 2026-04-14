import FriendsCard from "@/component/FriendsCard/FriendsCard";
import { friends } from "@/data/friends";
export default async function Home() {
  const data = friends;
  // console.log(data);
  return (
    <div className="  px-10  ">
      {/* header ---------- */}
      <div className="text-center mt-10 space-y-2">
        <h1 className="text-5xl font-bold">
          Friends To Keep Close In Your Life
        </h1>
        <p className="text-gray-500">
          Your personal shelf of meaningful connections.<br></br> Browse, tend,
          and nurture the relationships that matter most.
        </p>
        <button className="btn bg-[#244D3F] mt-2 text-white">
          + Add a Friend
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-10 pb-15 border-b border-gray-300  ">
        <div className="bg-white p-10 text-center rounded-xl">
          <h1 className="text-3xl font-bold">10</h1>
          <p className="text-gray-500">Total Friends</p>
        </div>
        <div className="bg-white p-10 text-center rounded-xl">
          <h1 className="text-3xl font-bold">9</h1>
          <p className="text-gray-500">On Track</p>
        </div>
        <div className="bg-white p-10 text-center rounded-xl">
          <h1 className="text-3xl font-bold">8</h1>
          <p className="text-gray-500">Need Attention</p>
        </div>
        <div className="bg-white p-10 text-center rounded-xl">
          <h1 className="text-3xl font-bold">19</h1>
          <p className="text-gray-500">Interactions This Month</p>
        </div>
      </div>
      {/* data fetching div------ */}

      <div className="mt-10">
        <h1 className="text-2xl  font-bold"> Yours Friend</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((friend) => (
            <FriendsCard friend={friend} key={friend.id}></FriendsCard>
          ))}
        </div>
      </div>
    </div>
  );
}
