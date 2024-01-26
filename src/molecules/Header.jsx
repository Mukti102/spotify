import React, { useEffect } from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import Avatar from "../atoms/Avatar";
import InputSearch from "../atoms/InputSearch";
import { useNavigate } from "react-router";
function Header({ input }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  return (
    <div className=" absolute right-0 left-0 px-3 bg-primary bg-opacity-15 py-5 flex justify-between ">
      <div className="flex gap-1 items-center">
        <button
          onClick={handleClick}
          className="w-8 h-8 rounded-full flex justify-center items-center bg-[#000] bg-opacity-80 hover:bg-[#222] text-sm"
        >
          <GoChevronLeft className="text-2xl font-bold" />
        </button>
        <button className="cursor-not-allowed w-8 h-8 rounded-full flex justify-center items-center bg-[#000] bg-opacity-80 text-sm hover:bg-[#222]">
          <GoChevronRight className="text-2xl font-bold" />
        </button>
        {input ? <InputSearch /> : null}
      </div>
      <Avatar />
    </div>
  );
}

export default Header;
