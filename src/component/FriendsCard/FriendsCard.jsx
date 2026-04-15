import Image from "next/image";
import Link from "next/link";

const FriendsCard = ({ friend }) => {
  //   console.log(friend);
  const { id, name, picture, days_since_contact, status } = friend;
  //   const handleShowbtn = (id) => {};
  return (
    <Link href={`friendDetails/${id}`}>
      <div className="card bg-white shadow-xl  mx-auto rounded-2xl">
        <div className="card-body items-center text-center">
          {/* avatar */}
          <div className="avatar">
            <div className="w-24 rounded-full">
              <Image src={picture} alt={name} width={100} height={100} />
            </div>
          </div>

          {/* name */}
          <h2 className="text-2xl font-bold text-gray-800 mt-2">{name}</h2>

          {/* last contact */}
          <p className="text-gray-500 text-sm">{days_since_contact}d ago</p>

          {/* tags */}
          <div className="flex gap-2 mt-2">
            <div className="badge badge-success p-3 text-white">WORK</div>
          </div>

          {/* status */}
          <div className="mt-3">
            <div className="badge badge-warning p-3 text-white">Almost Due</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FriendsCard;
