import React from "react";

export const Service = () => {
  const services = [
    {
      id: 1,
      images: "/Image_Icon/Icon/apartment 1.png",
      title: "Office Interior Design",
      price: "$299",
    },
    {
      id: 2,
      images: "/Image_Icon/Icon/affordable 1.png",
      title: "Showroom Design",
      price: "$399",
    },
    {
      id: 3,
      images: "/Image_Icon/Icon/lessee 1.png",
      title: "Residential/Home",
      price: "$499",
    },
  ];
  return (
    <div className="container  mt-10 text-center pb-10">
      <div className="text-center">
        <p>Service</p>
        <h1 className="text-4xl font-semibold ">
          We're an agency tailored to all <br /> clients needs that always
          delivers
        </h1>
      </div>
      <div className="md:flex md:gap-8  justify-center items-center text-center pt-16 ">
        {services.map(({ id, images, title, price }) => (
          <div
            key={id}
            className=" md:hover:shadow-xl rounded-md flex-col w-100% mt-8"
          >
            <img className="w-20 h-20 mx-auto" src={images} alt="service-pic" />
            <p className="font-semibold text-xl p-2">{title}</p>
            <p className="font-semibold text-xl">{price}</p>
            <p className="">
              Amet minim mollit non deserunt <br /> ullamco est sit aliqua dolor
              do amet <br /> sint. Velit officia consequat duis <br /> enim
              velit mollit.
            </p>
          </div>
        ))}
      </div>
      <button className="text-white py-2 px-10 rounded bg-[#251D58] mt-12">
        Explore more
      </button>
    </div>
  );
};
