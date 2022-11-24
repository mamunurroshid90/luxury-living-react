import React from "react";

export const FooterWidget = ({ title, list }) => {
  return (
    <div>
      <h5>{title}</h5>
      <ul>
        {list.map((l) => (
          <li>{l}</li>
        ))}
      </ul>
    </div>
  );
};
