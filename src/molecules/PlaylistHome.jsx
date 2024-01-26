import React from "react";
import useStore from "../zustand/useAppStore";
import PlayButton from "../atoms/PlayButton";
import { NavLink } from "react-router-dom";
function PlaylistHome() {
  const getQueryApi = useStore((state) => state.getQuery);
  const { data, isLoading } = getQueryApi("me/playlists", ["playlistHome"]);
  return (
    <div className="w-full h-48">
      <div>
        <h1 className="font-bold text-2xl mb-3">{Time()}</h1>
      </div>
      <div className=" w-full flex flex-wrap h-max gap-2 ">
        {isLoading && <h1>Loading...</h1>}
        {data?.data?.items.map((item, index) => {
          return <Card item={item} />;
        })}
      </div>
    </div>
  );
}

const Card = ({ item }) => {
  return (
    <NavLink
      to={`playlist/${item?.id}`}
      className="w-1/4 relative h-11 group  bg-[#333] rounded-[3px] flex items-center gap-2 overflow-hidden"
    >
      <div className="w-12 h-full overflow-hidden">
        <img
          src={item?.images[0].url}
          alt="card"
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="font-bold text-sm">{item?.name}</h1>
      <div className="w-6 h-6 text-lg hidden group-hover:inline-block absolute right-4">
        <PlayButton />
      </div>
    </NavLink>
  );
};

const Time = () => {
  let greting;
  const currentTime = new Date();
  const hour = currentTime.getHours();
  if (hour > 24) {
    greting = "Good Morning";
  } else if (hour > 12 && hour < 15) {
    greting = "Selamat Siang";
  } else if (hour > 15 && hour < 18) {
    greting = "Good Afternoon";
  } else {
    greting = "Good Night";
  }
  return greting;
};

export default PlaylistHome;
