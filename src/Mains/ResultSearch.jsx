import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router";
import useStore from "../zustand/useAppStore";
import { NavLink } from "react-router-dom";

function ResultSearch() {
  return (
    <>
      <div className="mt-20 px-5">
        <div className="w-full gap-3 flex">
          <Button>Lagu</Button>
          <Button>Playlists</Button>
          <Button>Artists</Button>
          <Button>Album</Button>
        </div>
      </div>
      <Outlet />
    </>
  );
}

const Button = ({ children }) => {
  return (
    <NavLink
      to={children === "Lagu" ? "" : children}
      className="px-4 py-[5px] bg-[#222] text-sm   rounded-full text-white"
    >
      {children}
    </NavLink>
  );
};

export default ResultSearch;
