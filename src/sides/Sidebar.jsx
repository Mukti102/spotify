import React from "react";
import Navbar from "../organism/Navbar";
import Library from "../organism/Library";

function Sidebar() {
  return (
    <div className="h-full  w-[23%]  flex flex-col gap-2 rounded-lg">
      <Navbar />
      <Library />
    </div>
  );
}

export default Sidebar;
