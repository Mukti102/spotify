import React from "react";
import Navbar from "../organism/Navbar";
import Library from "../organism/Library";

function Sidebar() {
  return (
    <div className="h-full hidden  sm:w-[23%]  sm:flex flex-col gap-2 rounded-lg">
      <Navbar />
      <Library />
    </div>
  );
}

export default Sidebar;
