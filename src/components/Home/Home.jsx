import React from "react";

export const Home = () => {
  return (
    <nav className="container md:max-w-[1240px] w-100% mx-auto h-screen mt-8 px-4 py-8 bg-[#F7F7F7]">
      <div className="navbar md:flex justify-between items-center">
        <div className="w-[130px]">
          <img src="/Image_Icon/Group 33069.png" alt="" />
        </div>
        <div className="mx-auto flex ">
          <ul className="flex">
            <li className="md:pl-16 pl-8">Home</li>
            <li className="md:pl-16 pl-8">About</li>
            <li className="md:pl-16 pl-8">Projects</li>
            <li className="md:pl-16 pl-8">Contact</li>
            <li className="md:pl-16 pl-8">Admin</li>
          </ul>
        </div>
        <button className="text-white py-2 px-10 rounded bg-[#251D58]">
          Login
        </button>
      </div>
      <div className="hero md:flex mx-auto justify-between mt-20">
        <div className="md:w-2/4 w-100%">
          <h1 className="text-6xl font-bold text-[#1F1632]">
            We Build <br />
            Your Dream
          </h1>
          <p className="text-[#606268] font-[16px] pt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
            facilis aut vel quas, omnis labore laudantium. Accusamus perferendis
            ad expedita?
          </p>
          <button className="text-white py-2 px-10 rounded bg-[#251D58] mt-6 mb-3">
            Booking
          </button>
        </div>
        <div className="md:w-[400px] h-[450px]">
          <img
            src="/Image_Icon/Image/pierre-chatel-innocenti-AlSlE8IAjZo-unsplash 1.png"
            alt=""
          />
        </div>
      </div>
    </nav>
  );
};
