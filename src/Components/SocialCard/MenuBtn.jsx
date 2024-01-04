import React from "react";

const MenuBtn = (props) => {
  return (
    <svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        fill="none"
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <circle cx="8" cy="2.5" r=".75"></circle>
        <circle cx="8" cy="8" r=".75"></circle>
        <circle cx="8" cy="13.5" r=".75"></circle>
      </g>
    </svg>
  );
};

export default MenuBtn;
