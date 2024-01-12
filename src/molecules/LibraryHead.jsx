import React from "react";
import { BiLibrary } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa6";
import { GoPlus } from "react-icons/go";
import Icon from "../atoms/Icon";
import IconButton from "../atoms/IconButton";
function LibraryHead() {
  return (
    <div className="w-full px-3 py-3 gap-1 flex flex-col h-max shadow-md shadow-black">
      <div className="w-full flex justify-between pr-1">
        <Icon icon={<BiLibrary />} size={"text-2xl"}>
          Your Library
        </Icon>
        <div className="flex gap-3">
          <IconButton icon={<GoPlus />} size={"text-xl"} />
          <IconButton icon={<FaArrowRight />} />
        </div>
      </div>
      <button className="font-semibold px-4 py-1 bg-[#222] hover:bg-[#333] text-white w-max h-max text-[11px] rounded-full">
        Playlist
      </button>
    </div>
  );
}

export default LibraryHead;
