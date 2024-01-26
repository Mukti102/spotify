import React from "react";
import CardList from "../atoms/CardList";
import useStore from "../zustand/useAppStore";
function LibraryList() {
  const getQuery = useStore((state) => state.getQuery);
  const { data, isLoading } = getQuery("me/playlists", ["keyQuery"]);
  return (
    <div className="w-full h-[73%] relative overflow-y-auto scroll-bar  flex flex-col gap-1  pl-3 pr-1 py-2">
      <div className="w-[250px] h-max">
        {isLoading && <h1>Loading....</h1>}
        {data?.data?.items.map((item, index) => {
          return <CardList item={item} key={index} />;
        })}
      </div>
    </div>
  );
}

export default LibraryList;
