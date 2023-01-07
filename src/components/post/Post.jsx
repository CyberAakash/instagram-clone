import React from "react";
import "./Post.css";
// import akashPic from "../../assets/aakash3D.png"
import Avatar from "@mui/material/Avatar";

function Post({ username, caption, imageUrl}) {
  return (
    <div className="post max-w-[500px] bg-white border border-gray-400 mb-12 mt-[12vh] dark:bg-[#212121] dark:text-yellow-50 dark:border-gray-700">
      <div className="post_header flex items-center p-[20px]">
        <Avatar
          className="post_avatar mr-[10px]"
          alt="Aakash Avatar"
          src="/static/images/avatar/1.jpg"
        />
        <h3 className="bg-red">{username}</h3>
      </div>
      {/* header -> avatar + username  */}

      {/* <img className="post_image w-screen object-contain" src={process.env.PUBLIC_URL + '/logo512.png'} alt="" /> */}
      <img
        className="post_image w-screen object-contain border-y border-gray-400 dark:border-gray-700"
        src={imageUrl}
        alt=""
      />
      {/* image */}

      <h4 className="post_text text-left p-[20px]">
        <strong>{username}</strong> {caption}
      </h4>
      {/* username + caption */}
    </div>
  );
}

export default Post;
