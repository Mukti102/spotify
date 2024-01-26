import React, { useEffect, useState } from "react";
import useStore from "../zustand/useAppStore";
import Card from "../atoms/Card";
function TopPlaylists({ url, Title, showAll }) {
  const [playlists, setPlaylists] = useState([]);
  const getTopPlaylist = useStore((state) => state.getQuery);
  const { data, isLoading } = getTopPlaylist(url, [Title]);
  useEffect(() => {
    if (data) {
      setPlaylists(data?.data?.playlists?.items);
    } else {
      setPlaylists(null);
    }
  }, [data, url]);

  return (
    <div className="w-full h-full mb-6">
      <Header Title={Title} showAll={showAll} />
      <div className="w-full flex-wrap flex gap-3">
        {playlists?.map((item, index) => {
          return <Card item={item} key={index} />;
        })}
        {isLoading && <h1>Loading...</h1>}
      </div>
    </div>
  );
}

const Header = ({ Title, showAll }) => {
  return (
    <div className="flex justify-between pr-1 ">
      <h1 className="text-2xl capitalize font-bold text-white">
        {Title} Terbaik 2024
      </h1>
      <span className="text-sm cursor-pointer hover:text-white hover:underline">
        {showAll ? "Show all" : null}
      </span>
    </div>
  );
};

export default TopPlaylists;
