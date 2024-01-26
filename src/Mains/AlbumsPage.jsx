import React from "react";
import { useParams } from "react-router";
import PlaylistPage from "../templates/Palylist";

function AlbumsPage() {
  const params = useParams();
  const id = params.id;
  return <PlaylistPage id={id} url={`albums/${id}`} type={"albums"} />;
}

export default AlbumsPage;
