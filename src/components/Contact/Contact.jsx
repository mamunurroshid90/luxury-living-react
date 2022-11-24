import React from "react";
import "./Contact.css";

export const Contact = () => {
  return (
    <div className="container mt-10 text-center">
      <p>Contact</p>
      <h1 className="text-[#2D2D2D] text-4xl font-bold mt-4 mb-10">
        Let us handle your <br /> Project, Professionally
      </h1>
      <div class="block p-6 rounded-lg shadow-lg bg-white max-w-md mx-auto">
        <form>
          <div class="form-group mb-6">
            <input
              type="text"
              class="form-control"
              id="exampleInput7"
              placeholder="First name"
            />
          </div>
          <div class="form-group mb-6">
            <input
              type="text"
              class="form-control"
              id="exampleInput7"
              placeholder="last name"
            />
          </div>
          <div class="form-group mb-6">
            <input
              type="text"
              class="form-control"
              id="exampleInput7"
              placeholder="Enter your name"
            />
          </div>
          <div class="form-group mb-6">
            <input
              type="phone"
              class="form-control"
              id="exampleInput8"
              placeholder="Enter your number"
            />
          </div>

          <div class="form-group mb-6">
            <textarea
              class="        form-control      "
              id="exampleFormControlTextarea13"
              rows="3"
              placeholder="Message"
            ></textarea>
          </div>
        </form>
      </div>
      <button className="text-white py-2 px-10 rounded bg-[#251D58] mt-8 mb-10">
        Send message
      </button>
    </div>
  );
};
