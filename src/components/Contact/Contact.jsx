import React from "react";
import "./Contact.css";

export const Contact = () => {
  return (
    <div className="max-w-[1240px] mx-auto w-100% h-screen mt-10 text-center">
      <p>Contact</p>
      <h1 className="text-[#2D2D2D] text-4xl font-bold mt-4 mb-10">
        Let us handle your <br /> Project, Professionally
      </h1>
      <form action="" className=" mx-auto">
        <input
          className="mr-4 pr-16 py-2 pl-2 my-2 rounded-md"
          type="text"
          placeholder="first name"
        />
        <input
          className="pr-16 pl-2 py-2 rounded-md"
          type="text"
          placeholder="last name"
        />{" "}
        <br />
        <input
          className="mr-4 pr-16 pl-2 py-2 my-2 rounded-md"
          type="email"
          placeholder="Enter your email"
        />
        <input
          className="pr-16 pl-2 py-2 rounded-md"
          type="phone"
          placeholder="Enter your number"
        />{" "}
        <br />
        <textarea
          className="px-[142px] rounded-md"
          name="message"
          id=""
          cols="30"
          rows="5"
          placeholder="Enter your message"
        ></textarea>
      </form>
      <button className="text-white py-2 px-10 rounded bg-[#251D58] mt-8">
        Send message
      </button>
    </div>
  );
};
