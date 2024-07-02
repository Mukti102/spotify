import React from "react";
import { handleContent } from "../atoms/Card";
function CurrentSong({ item }) {
  return (
    <div className="sm:w-[35%] w-[50%] flex justify-start items-center">
      <div className="sm:w-14 rounded-md sm:h-14 w-14 h-12 bg-red-300 overflow-hidden">
        <img
          src={item?.album?.images[0]?.url}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="h-full sm:w-32 w-full flex-col flex ml-2">
        <h1 className="text-sm font-semibold">
          {handleContent(item?.name, 15)}
        </h1>
        <p className="text-xs w-full font-normal text-secondary">
          {item?.artists[0]?.name}
        </p>
      </div>
    </div>
  );
}

export default CurrentSong;
