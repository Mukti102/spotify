import React, { useState } from "react";
import useStore from "../zustand/useAppStore";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa6";
import ArtistsDetail from "../atoms/ArtistsDetail";
import { handleContent } from "../atoms/Card";
function ArtistSide() {
  const track = useStore((state) => state.track);
  const [like, setLike] = useState(false);
  return (
    <div
      className={`w-[25%] ${
        track ? "" : "hidden"
      } scroll-bar p-3 overflow-y-auto h-full bg-primary rounded-lg`}
    >
      <div className="w-full h-72 rounded-md overflow-hidden bg-[#666]">
        <img
          src={track?.album?.images[0]?.url}
          className="w-full h-full object-cover"
          alt=""
        />
      </div>
      <div className="my-2 px-1 flex justify-between">
        <div>
          <h1 className="text-lg  capitalize font-bold">
            {handleContent(track?.name, 20)}
          </h1>
          <p className="text-sm capitalize text-secondary font-normal">
            {track?.artists[0].name}
          </p>
        </div>
        <button
          className="text-green-400 text-xl "
          onClick={() => setLike(!like)}
        >
          {like ? <FaHeart /> : <FiHeart />}
        </button>
      </div>
      <ArtistsDetail artistId={track?.artists[0]?.id} />
    </div>
  );
}

export default ArtistSide;
