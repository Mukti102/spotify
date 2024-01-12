import React from "react";
import Sidebar from "../sides/Sidebar";
import MidleSide from "../sides/MidleSide";
import ArtistSide from "../sides/ArtistSide";

function Main() {
  return (
    <div className="w-full min-h-screen pt-3 px-3">
      <section className="w-full h-[440px] flex gap-2">
        <Sidebar />
        <MidleSide />
        <ArtistSide />
      </section>
    </div>
  );
}

export default Main;
