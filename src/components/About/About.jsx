import React from "react";
import { FooterWidget } from "../FooterWidget";

export const About = () => {
  return (
    <div className="bg-[#251D58] text-white py-10 ">
      <div className="md:flex  max-w-[1240px] mx-auto justify-around">
        <div className="mb-4 pl-8">
          <p>H#000 (0th Floor), Road #00,</p>
          <p>New DOHS, Mohakhali, Dhaka, Bangladesh</p>
        </div>

        <FooterWidget
          title="Company"
          list={[
            "About",
            "Project",
            "Our team",
            "Terms conditions",
            "Submit listing",
          ]}
        />

        <FooterWidget
          title="Quick links"
          list={["Rentals", "Sales", "Contact", "Our blog"]}
        />

        <div className="pl-8">
          <h5 className="text-2xl font-medium mb-4">About us</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit. Purus commodo ipsum <br />
            duis laoreet maecenas. Feugiat.
          </p>
        </div>
      </div>
      <p className="text-center mt-16 mb-0">Copyright programming hero 2022</p>
    </div>
  );
};
