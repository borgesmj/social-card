import React from "react";
import ProfilePic from "./SocialCard/ProfilePic";
import NameUserName from "./SocialCard/NameUserName";
import MenuBtn from "./SocialCard/MenuBtn";
import Following from "./SocialCard/Following";
import PostPic from "./SocialCard/PostPic";
import LikeBtn from "./SocialCard/LikeBtn";
import CommentBtn from './SocialCard/CommentBtn';
import MessageBtn from './SocialCard/MessageBtn';
import FavoriteBtn from './SocialCard/FavoritesBtn';
import PostText from './SocialCard/PostText'

const SocialCard = () => {
  return (
    <div className="bg-white flex flex-col w-full rounded-lg md:w-1/2 lg:w-1/5">
      {/* User Data */}
      <div className="p-2 flex flex-row justify-between items-center h-14">
        <div className="flex flex-row h-full">
          <ProfilePic />
          <NameUserName />
          <Following />
        </div>
        <div
          onClick={() => {
            console.log("click");
          }}
        >
          <MenuBtn />
        </div>
      </div>
      {/* Post Pic */}
      <PostPic />
      {/* like, comment, share, save */}
      <div className=" w-full h-8 flex flex-row justify-between items-center px-2">
        <div className=" flex flex-row w-1/3 justify-between h-full items-center">
          <LikeBtn/>
          <CommentBtn/>
          <MessageBtn/>
        </div>
        <div>
          <FavoriteBtn/>
        </div>
      </div>
      {/* post text */}
      <PostText/>
    </div>
  );
};

export default SocialCard;
