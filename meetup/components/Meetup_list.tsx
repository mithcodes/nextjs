// meetup_list.tsx

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

interface Meetup {
  id: string;
  title: string;
  image: string;
  address: string;
  description: string;
}

const getMeetup = async () => {
  const response = await fetch("http://localhost:3000/api/meetup");
  const data = await response.json();
  return data.data;
};

const MeetupList = async () => {
  let data = await getMeetup();

  return (
    <div>
      {data.map((meetup: any) => (
        <div key={meetup._id} className="card shadow-inner">
          <img src={meetup.image} alt={meetup.title} />
          <h2>{meetup.title}</h2>
          <p className="mb-3">{meetup.address}</p>
          <Link href={`/${meetup._id}`} className="button">
            Get Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MeetupList;
