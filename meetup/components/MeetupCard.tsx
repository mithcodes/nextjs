// interface Meetup {
//   id: string;
//   title: string;
//   image: string;
//   address: string;
//   description: string;
// }

import mongoose from "mongoose";
import connectionStr from "../app/lib/db";
import Meetup from "@/app/lib/model/model";

const MeetupCard: React.FC<{ id: String }> = async ({ id }) => {
  await mongoose.connect(connectionStr);
  const data = await Meetup.findById(id);

  return (
    <div className="card shadow-inner">
      <img src={data.image} alt={data.title} />
      <h2>{data.title}</h2>
      <p>{data.address}</p>
      <p>{data.description}</p>
    </div>
  );
};

export default MeetupCard;
