import { RiPlayFill } from "react-icons/ri";
import React from "react";

function PlayButton() {
  return (
    <button className="w-full shadow-sm shadow-black h-full rounded-full flex items-center justify-center text-black  bg-green-500">
      <RiPlayFill />
    </button>
  );
}

export default PlayButton;
