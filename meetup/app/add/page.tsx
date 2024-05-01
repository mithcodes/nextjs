"use client";
import { Fragment, useState } from "react";
import { Head } from "next/document";

function addMeetup() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      let result = await fetch("http://localhost:3000/api/meetup", {
        method: "POST",
        body: JSON.stringify({ title, image, address, description }),
      });
      result = await result.json();
      alert("New meetup added");
      setTitle("");
      setAddress("");
      setDescription("");
      setImage("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form_container">
      <div className="w-full">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border_form"
          onSubmit={(e) => handleSubmit(e)}
        >
          <h1 className="text_heading">Add Meetup</h1>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2 text-left">
              Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
              id="username"
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <label className="block text-gray-700 text-sm font-bold mb-2 text-left">
              Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
              id="username"
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            <label className="block text-gray-700 text-sm font-bold mb-2 text-left">
              Image Url
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
              id="username"
              type="text"
              placeholder="Image Url"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />

            <label className="block text-gray-700 text-sm font-bold mb-2 text-left">
              Description
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
              id="username"
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="flex flex-row-reverse">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default addMeetup;
