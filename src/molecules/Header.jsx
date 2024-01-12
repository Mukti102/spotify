import React from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import Avatar from "../atoms/Avatar";
function Header() {
  return (
    <div className="w-full py-3 flex justify-between ">
      <div className="flex gap-1">
        <button className="w-8 h-8 rounded-full flex justify-center items-center bg-[#000] bg-opacity-80 hover:bg-[#222] text-sm">
          <GoChevronLeft className="text-2xl font-bold" />
        </button>
        <button className="w-8 h-8 rounded-full flex justify-center items-center bg-[#000] bg-opacity-80 text-sm hover:bg-[#222]">
          <GoChevronRight className="text-2xl font-bold" />
        </button>
      </div>
      <Avatar />
    </div>
  );
}

export default Header;
