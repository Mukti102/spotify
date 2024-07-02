import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import useStore from "../zustand/useAppStore";
import CardArtist from "../atoms/CardArtist";
function ArtistsLists() {
  const params = useParams();
  const [results, setResults] = useState(null);
  const searchValue = params.id;
  const useQuery = useStore((state) => state.getQuery);
  const { data } = useQuery(`search?q=${searchValue}&type=artist`, [
    searchValue,
  ]);
  useEffect(() => {
    setResults(data?.data?.artists?.items);
  }, [data]);
  return (
    <div className="w-full bg-primary bg-opacity-15 p-5 absolute right-0 h-full">
      <div className="w-full  flex flex-wrap gap-3 p-3">
        {results?.map((item, index) => {
          return <CardArtist item={item} key={index} />;
        })}
      </div>
    </div>
  );
}

export default ArtistsLists;
