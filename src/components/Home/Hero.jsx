import React from "react";

export const Hero = () => {
  return (
    <div className="hero md:flex justify-between mt-20 container p-8">
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
        <button className="text-white py-2 px-10 rounded bg-dark-blue mt-6 mb-3">
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
  );
};
