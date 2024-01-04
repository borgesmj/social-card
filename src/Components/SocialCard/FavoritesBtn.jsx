import React from "react";

const FavoritesBtn = (props) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="none"
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m11 13.5l-4-4l-4 4v-12a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1Z"
      ></path>
    </svg>
  );
};

export default FavoritesBtn;
