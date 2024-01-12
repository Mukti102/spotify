import React from "react";
import Navbar from "../organism/Navbar";
import Library from "../organism/Library";

function Sidebar() {
  return (
    <div className="flex-initial w-96 h-full flex flex-col gap-2 rounded-lg">
      <Navbar />
      <Library />
    </div>
  );
}

export default Sidebar;
