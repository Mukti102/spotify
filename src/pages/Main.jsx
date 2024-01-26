import React from "react";
import Sidebar from "../sides/Sidebar";
import MidleSide from "../sides/MidleSide";
import ArtistSide from "../sides/ArtistSide";
import { Outlet } from "react-router";
import AudioControl from "../sides/AudioControl";
function Main() {
  return (
    <div className="w-full  h-screen pt-3 px-3">
      <section className="w-full h-[85%] flex gap-2">
        <Sidebar />
        <MidleSide>
          <Outlet />
        </MidleSide>
        <ArtistSide />
      </section>
      <AudioControl />
    </div>
  );
}

export default Main;
