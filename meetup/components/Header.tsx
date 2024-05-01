import Link from "next/link";

function header() {
  return (
    <div className="header">
      <div>ReactMeetup</div>
      <div>
        <Link href={"/"} className="btn">
          Get All Meetups
        </Link>
        <Link href={"/add"} className="btn">
          Add Meetup
        </Link>
      </div>
    </div>
  );
}

export default header;
