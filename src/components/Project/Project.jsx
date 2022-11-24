import React from "react";
import { CiLocationOn } from "react-icons/ci";

export const Project = () => {
  const projects = [
    {
      id: 1,
      image: "/Image_Icon/Image/bernard-hermant-6ftZuO_-b64-unsplash 1.png",
      title: "Villa on Washington Avenue",
      icon: <CiLocationOn />,
      location: "Dhaka, Bangladesh",
    },
    {
      id: 2,
      image: "/Image_Icon/Image/Mask Group.png",
      title: "Luxury villa in Rego Park",
      icon: <CiLocationOn />,
      location: "Dhaka, Bangladesh",
    },
    {
      id: 3,
      image: "/Image_Icon/Image/Mask Group-1.png",
      title: "Gorgeous house",
      icon: <CiLocationOn />,
      location: "Dhaka, Bangladesh",
    },
  ];
  return (
    <div className="max-w-[1240px] mx-auto mt-10">
      <div className="text-center">
        <p>Project</p>
        <h3 className="text-[#1F1632] font-bold text-4xl pb-20">
          Discover The latest Interior Design <br />
          Available Today
        </h3>
      </div>
      <div className="p-4 flex gap-6 flex-col md:flex-row">
        {projects.map(({ id, image, title, icon, location }) => (
          <div key={id} className="text-center w-full">
            <img
              className="h-[400px] w-full object-cover rounded-t"
              src={image}
              alt="project-pic"
            />
            <h4 className="text-[#1F1632] text-xl font-semibold">{title}</h4>
            <p className="text-sm flex gap-2 items-center justify-center">
              {icon}
              {location}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
