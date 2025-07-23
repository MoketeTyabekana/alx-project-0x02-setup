import React from "react";
import { PostProps } from "@/interfaces";


const PostCard: React.FC<PostProps> = ({ userId, title, body,id }) => {
  return (
    <>
      <div className="flex flex-col gap-4 shadow-sm rounded-md p-4">
        <h1 className="text-2xl text-blue-400 truncate">
            {title}
        </h1>
        <p className="text-gray-600">
            {body}
        </p>
        <p className=" flex justify-between ">
          <span> User Id: {userId}</span>
          <span> Id: {id}</span>
        </p>
      </div>
    </>
  );
};

export default PostCard;
