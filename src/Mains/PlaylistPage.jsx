import React from "react";
import { useParams } from "react-router";
import PlaylistPage from "../templates/Palylist";

function Playlists() {
  const params = useParams("");
  const id = params.id;
  return (
    <div>
      <PlaylistPage url={`playlists/${id}`} id={id} type={"playlists"} />
    </div>
  );
}

export default Playlists;
