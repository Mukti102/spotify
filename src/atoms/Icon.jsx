import React from "react";
import { NavLink, useParams } from "react-router-dom";
function Icon({ icon, children, size, page }) {
  return (
    <NavLink
      to={page}
      className="font-bold cursor-pointer group w-full items-center  flex"
    >
      <button
        className={`${size}  w-10 h-10 group-hover:text-white flex justify-center items-center text-secondary `}
      >
        {icon}
      </button>
      <span className="active text-[15px] group-hover:text-white text-secondary">
        {children}
      </span>
    </NavLink>
  );
}

export default Icon;
