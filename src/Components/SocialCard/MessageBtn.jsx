import React from "react";

const MessageBtn = (props) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="#000000"
        d="M21 4a1.31 1.31 0 0 0-.06-.27v-.09a1 1 0 0 0-.2-.3a1 1 0 0 0-.29-.19h-.09a.86.86 0 0 0-.31-.15H20a1 1 0 0 0-.3 0l-18 6a1 1 0 0 0 0 1.9l8.53 2.84l2.84 8.53a1 1 0 0 0 1.9 0l6-18A1 1 0 0 0 21 4m-4.7 2.29l-5.57 5.57L5.16 10ZM14 18.84l-1.86-5.57l5.57-5.57Z"
      ></path>
    </svg>
  );
};

export default MessageBtn;
