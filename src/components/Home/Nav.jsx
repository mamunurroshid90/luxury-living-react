import React from "react";

export const Nav = () => {
  return (
    <nav className="container py-8 px-4">
      <div className="navbar md:flex justify-between items-center">
        <div className="w-[130px]">
          <img src="/Image_Icon/Group 33069.png" alt="" />
        </div>
        <div className="mx-auto flex my-4">
          <ul className="flex">
            <li className="md:pl-16 pl-8">Home</li>
            <li className="md:pl-16 pl-8">About</li>
            <li className="md:pl-16 pl-8">Projects</li>
            <li className="md:pl-16 pl-8">Contact</li>
            <li className="md:pl-16 pl-8">Admin</li>
          </ul>
        </div>
        <button className="text-white py-2 my-4 px-10 rounded bg-[#251D58]">
          Login
        </button>
      </div>
    </nav>
  );
};
