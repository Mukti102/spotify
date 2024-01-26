import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import useStore from "../zustand/useAppStore";
import ArboardLists from "../molecules/ArboardLists";
function SongList() {
  const params = useParams();
  const [results, setResults] = useState(null);
  const searchValue = params.id;
  const useQuery = useStore((state) => state.getQuery);
  const { data } = useQuery(`search?q=${searchValue}&type=track`, [
    searchValue,
  ]);
  useEffect(() => {
    setResults(data?.data?.tracks?.items);
  }, [data]);
  return (
    <div className="w-full bg-primary bg-opacity-15 p-5 absolute right-0 h-full">
      <ArboardLists items={results} />
    </div>
  );
}

export default SongList;
