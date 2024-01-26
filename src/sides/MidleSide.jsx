import React from "react";
import { Outlet } from "react-router";
function MidleSide() {
  return (
    <div className="flex-auto relative  overflow-y-auto scroll-bar   gap-3 min-h-full bg-primary rounded-lg">
      <Outlet />
    </div>
  );
}

export default MidleSide;
