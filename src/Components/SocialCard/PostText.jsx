import React from "react";
import { useState } from "react";

const PostText = () => {
  const [fullText, setFullText] = useState(false);
  const postText =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis eos beatae laudantium qui quidem repudiandae non quo sit, modi itaque, tempora animi error corporis harum doloribus totam nulla corrupti eum, fugiat assumenda? Fugiat repellat exercitationem provident illo soluta tempore repudiandae est eaque quia itaque magni, aspernatur corrupti numquam vero. Dicta.";

  const textOne = postText.slice(0, 100);
  const textTwo = postText.slice(100);

  return (
    <p className="px-2">
      <a href="" className="font-bold">
        borgesmj{" "}
      </a>
      {textOne}
      {!fullText ? "... " : ""} {fullText && <span>{textTwo}</span>}
      <span
        className="font-bold"
        onClick={() => {
          setFullText(!fullText);
        }}
      >
        {!fullText ? "ver mas" : " Ver menos"}
      </span>
    </p>
  );
};

export default PostText;
