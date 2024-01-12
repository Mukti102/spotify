import React from "react";

function Icon({ icon, children, size }) {
  return (
    <div className=" font-bold cursor-pointer group w-full items-center  flex">
      <button
        className={`${size} w-10 h-10 group-hover:text-white flex justify-center items-center text-secondary `}
      >
        {icon}
      </button>
      <span className="text-[15px] group-hover:text-white text-secondary">
        {children}
      </span>
    </div>
  );
}

export default Icon;
