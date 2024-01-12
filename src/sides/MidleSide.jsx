import React from "react";
import Header from "../molecules/Header";
import Sponsored from "../molecules/Sponsored";
function MidleSide() {
  return (
    <div className="flex-auto px-4 h-full bg-primary rounded-lg">
      <Header />
      <Sponsored />
    </div>
  );
}

export default MidleSide;
