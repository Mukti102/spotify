import React from "react";
import { Link } from "react-router-dom";

function CardList({ item }) {
  return (
    <Link
      to={`playlist/${item.id}`}
      className="w-full gap-2 p-[6px] flex h-14 rounded-sm cursor-pointer hover:bg-[#5555]"
    >
      <div className="w-1/5 h-full rounded-sm overflow-hidden">
        <img
          src={item?.images[0]?.url}
          alt="picture"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex justify-center py-1 flex-col gap-1">
        <h1 className="text-[14px] font-medium text-white">{item?.name}</h1>
        <span className="text-[11px] font-medium ">
          Playlist . {item?.owner.display_name}
        </span>
      </div>
    </Link>
  );
}

export default CardList;
