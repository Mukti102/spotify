import React from "react";
import { Link } from "react-router-dom";

function CardCategory({ id, Title, image }) {
  return (
    <Link
      to={`/spotify/category/${id}`}
      className={`cursor-pointer  shadow-sm shadow-white m-1 relative w-1/5 p-2 overflow-hidden bg-cover h-[180px] rounded-md`}
    >
      <img
        src={image}
        alt=""
        className="absolute w-full  top-0 bottom-0 h-full right-0 left-0 object-cover"
      />
      <h1 className="absolute m-2 font-bold text-lg text-white">{Title}</h1>
    </Link>
  );
}

export default CardCategory;
