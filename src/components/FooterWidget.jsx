import React from "react";

export const FooterWidget = ({ title, list }) => {
  return (
    <div className="mb-4 md:flex flex">
      <h5 className="p-8 text-2xl font-medium">{title}</h5>
      <ul>
        {list.map((l) => (
          <li>{l}</li>
        ))}
      </ul>
    </div>
  );
};
