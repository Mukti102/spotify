import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import useStore from "../zustand/useAppStore";
import TopPlaylists from "../templates/TopPlaylists";

function PlaylistsLists() {
  const params = useParams();
  const [results, setResults] = useState(null);
  const searchValue = params.id;
  const useQuery = useStore((state) => state.getQuery);
  const { data } = useQuery(`search?q=${searchValue}&type=playlist`, [
    searchValue,
  ]);
  useEffect(() => {
    setResults(data?.data?.tracks?.items);
  }, [data]);
  return (
    <div className="w-full bg-primary bg-opacity-15 p-5 absolute right-0 h-full">
      <TopPlaylists
        url={`search?q=${searchValue}&type=playlist`}
        Title={searchValue}
        showAll={false}
      />
    </div>
  );
}

export default PlaylistsLists;
