import React, { useState } from "react";
import { BiSolidVolumeFull } from "react-icons/bi";

function VolumeSong({ audio }) {
  const [volume, setVolume] = useState(audio.current.volume);
  const style = {
    background: `linear-gradient(to right, white ${volume * 100}%,#333 ${
      audio.current.volume
    }%)`,
  };
  const handleChange = (e) => {
    setVolume(e.target.value);
    if (audio.current) {
      audio.current.volume = volume;
    }
  };
  return (
    <div className="w-[25%] flex items-center justify-end h-full">
      <button className="px-2 hover:text-white text-sm text-secondary">
        <BiSolidVolumeFull />
      </button>
      <input
        type="range"
        value={volume}
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
