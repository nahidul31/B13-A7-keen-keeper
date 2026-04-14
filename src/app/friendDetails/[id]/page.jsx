import FriendDetailsClient from "./FriendDetailsClient";
import { friends } from "@/data/friends";

export async function generateStaticParams() {
  return friends.map((friend) => ({
    id: String(friend.id),
  }));
}

const FriendDetailsPage = ({ params }) => {
  return <FriendDetailsClient id={params.id} />;
};

export default FriendDetailsPage;
