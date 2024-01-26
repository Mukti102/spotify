import React from "react";
import PlayButton from "./PlayButton";
import { NavLink } from "react-router-dom";

function Card({ item }) {
  return (
    <NavLink
      to={`/spotify/playlist/${item?.id}`}
      className="w-48 cursor-pointer rounded-md group overflow-hidden h-[270px] p-2  mt-3 bg-[#222]"
    >
      <div className="w-full relative h-44  bg-[#222] rounded-md overflow-hidden">
        <img
          src={item?.images[0]?.url}
          alt="card"
          className="w-full h-full object-cover"
        />
        <div className="w-10 text-3xl  right-3 hidden group-hover:inline-block bottom-3 h-10 absolute">
          <PlayButton />
        </div>
      </div>
      <div className="w-full mt-2">
        <h1 className="text-lg font-semibold text-white">
          {handleContent(item?.name, 14) || null}
        </h1>
        <p className="text-[11px] font-medium text-secondary">
          {handleContent(item?.description)}
        </p>
      </div>
    </NavLink>
  );
}

export const handleContent = (content, lenght = 50) => {
  if (content?.length > lenght) {
    return `${content.slice(0, lenght)}...`;
  } else {
    return `${content}`;
  }
};

export default Card;
