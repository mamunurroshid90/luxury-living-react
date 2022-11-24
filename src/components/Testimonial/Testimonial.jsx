import React from "react";

export const Testimonial = () => {
  const testimonial = [
    {
      id: 1,
      images: "/Image_Icon/Image/Ellipse 90.png",
      name: "Nasa Patrik",
      title: "CEO, Manpol",
    },
    {
      id: 2,
      images: "/Image_Icon/Image/Ellipse 91.png",
      name: "Miriam Barron",
      title: "CEO, Manpol",
    },
    {
      id: 3,
      images: "/Image_Icon/Image/Ellipse 92.png",
      name: "Bria Malone",
      title: "CEO, Manpol",
    },
  ];
  return (
    <div className="container mt-10 bg-[#F7F7F7]">
      <h1 className="pt-28 text-center text-[#1F1632] text-4xl font-bold">
        Testimonial
      </h1>
      <div className="md:flex justify-center items-center pt-20 mx-auto">
        {testimonial.map(({ id, images, name, title }) => (
          <div
            key={id}
            className="text-center justify-center md:shadow-2xl py-6 px-6 rounded"
          >
            <div className="flex justify-center items-center">
              <img className="w-16 h-16" src={images} alt="" />
              <div className="pl-4">
                <h3 className="text-xl font-bold">{name}</h3>
                <h4 className="text-lg font-medium">{title}</h4>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
              Purus commodo ipsum <br /> duis laoreet maecenas. Feugiat.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
