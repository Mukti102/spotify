import React from "react";
import { handleContent } from "./Card";
import { Link } from "react-router-dom";
function CardArtist({ item }) {
  return (
    <Link className="w-48 h-[275px] px-3 py-2 bg-[#333] rounded-md">
      <div className="w-[150px] mx-auto mt-2 h-[150px] rounded-full overflow-hidden bg-[#222]">
        <img src={item?.images[0]?.url} className="w-full h-full" />
      </div>
      <div className="w-full  h-max mt-6">
        <h1 className="text-lg text-white font-bold">
          {handleContent(handleContent(item?.name, 15))}
        </h1>
        <p className="text-[14px] my-2 h-max">{"Artist"}</p>
      </div>
    </Link>
  );
}

export default CardArtist;
