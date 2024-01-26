import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import useStore from "../zustand/useAppStore";
import Card from "../atoms/Card";
import TopPlaylists from "../templates/TopPlaylists";
import CardAlbum from "../atoms/CardAlbum";

function AlbumLists() {
  const params = useParams();
  const [results, setResults] = useState(null);
  const searchValue = params.id;
  const useQuery = useStore((state) => state.getQuery);
  const { data } = useQuery(`search?q=${searchValue}&type=album`, [
    searchValue,
  ]);
  useEffect(() => {
    setResults(data?.data?.albums?.items);
  }, [data]);

  return (
    <div className="w-full bg-primary bg-opacity-15 p-5 absolute right-0 h-full">
      <div className="w-full flex flex-wrap gap-3 p-3">
        {results?.map((item, index) => {
          return <CardAlbum item={item} key={index} />;
        })}
      </div>
    </div>
  );
}

export default AlbumLists;
