"use client";
import { useParams } from "next/navigation";
import { friends } from "@/data/friends";
const FriendDetailsPage = () => {
  const { id } = useParams();

  const data = friends;
  const friendInformation = data.find((item) => item.id == id);
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

  return (
    <div>
      <h1> details page {name} </h1>
    </div>
  );
};

export default FriendDetailsPage;
