import React from "react";
import Sponsored from "../molecules/Sponsored";
import PlaylistHome from "../molecules/PlaylistHome";
import TopPlaylists from "../templates/TopPlaylists";
import Header from "../molecules/Header";
function Home() {
  return (
    <>
      <Header input={false} />
      <div className="w-full overflow-hidden bg-primary bg-opacity-15 p-5 absolute right-0 sm:h-full">
        {/* <Sponsored /> */}
        <PlaylistHome />
        <TopPlaylists
          url={"browse/featured-playlists"}
          Title={"Featured Playlists"}
          showAll={false}
        />
        <TopPlaylists
          url={"browse/categories/dinner/playlists?limit=4"}
          Title={"Dinner Playlists"}
          showAll={true}
        />
      </div>
    </>
  );
}

export default Home;
