import React from "react";
import { handleContent } from "../atoms/Card";
function CurrentSong({ item }) {
  return (
    <div className="w-[25%] flex justify-start items-center">
      <div className="w-14 rounded-md h-14 bg-red-300 overflow-hidden">
        <img
          src={item?.album?.images[0]?.url}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="h-full flex-col flex ml-2">
        <h1 className="text-sm font-semibold">
          {handleContent(item?.name, 15)}
        </h1>
        <p className="text-xs font-normal text-secondary">
          {item?.artists[0]?.name}
        </p>
      </div>
    </div>
  );
}

export default CurrentSong;
