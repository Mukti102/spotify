import React from "react";
import { BiSolidVolumeFull } from "react-icons/bi";

function VolumeSong({ audio }) {
  const style = {
    background: `linear-gradient(to right, white ${
      audio.current.volume * 100
    }%,#333 ${audio.current.volume}%)`,
  };
  const handleChange = (e) => {
    if (audio.current) {
      audio.current.volume = e.target.value;
    }
  };
  return (
    <div className="w-[25%] flex items-center justify-end h-full">
      <button className="px-2 hover:text-white text-sm text-secondary">
        <BiSolidVolumeFull />
      </button>
      <input
        type="range"
        value={audio.current.volume}
        min={0}
        max={1}
        step={0.1}
        onChange={handleChange}
        className=" volume h-[4px] w-24"
        style={style}
      />
    </div>
  );
}

export default VolumeSong;
