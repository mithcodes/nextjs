import mongoose from "mongoose";

const meetupModel = new mongoose.Schema({
  title: String,
  address: String,
  description: String,
  image: String,
});

const Meetup =
  mongoose.models.meetups || mongoose.model("meetups", meetupModel);

export default Meetup;
