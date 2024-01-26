import React, { useEffect, useState } from "react";
import logo from "../assets/spotifyLogo.png";
import PlayButton from "../atoms/PlayButton";
import { FaRegHeart } from "react-icons/fa6";
import useStore from "../zustand/useAppStore";
import ArboardLists from "../molecules/ArboardLists";
import { handleContent } from "../atoms/Card";

function PlaylistPage({ url, id, type }) {
  const [tracks, setTracks] = useState(null);
  const useQuery = useStore((state) => state.getQuery);
  const { data, isLoading } = useQuery(url, [id]);
  useEffect(() => {
    if (data && type === "playlists") {
      setTracks(data?.data?.tracks?.items.map((item) => item.track));
    } else {
      setTracks(data?.data?.tracks?.items);
    }
  }, [data]);
  return (
    <>
      {isLoading && <div className="w-full h-full"></div>}
      {data && (
        <div
          className={`w-full pt-20 h-full bg-gradient-to-t from-primary from-3% to-[#027bb3]  px-5`}
        >
          <div className="w-full gap-3 h-52  flex items-center">
            <div className="w-40 rounded-md shadow-md shadow-slate-700 h-40 bg-primary">
              <img
                src={data?.data?.images[0]?.url}
                alt="playlist"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-auto h-40 w-32 flex flex-col justify-between  ">
              <span className="text-white text-sm">{"Playlist"}</span>
              <h1 className="text-[3rem] capitalize text-white font-extrabold">
                {handleContent(data?.data?.name, 25)}
              </h1>
              <p className="text-sm text-secondary">
                {data?.data?.description
                  ? handleContent(data?.data?.description, 200)
                  : null}
              </p>
              <div className="flex gap-1 items-center">
                <div className="w-6 h-6 ">
                  <img src={logo} alt="img" />
                </div>
                <span className="text-sm font-bold text-white">Spotify</span>
                <span className="text-sm text-white">
                  • {tracks?.followers?.total} Followers •{" "}
                  {data?.data?.tracks?.items.length} lagu, sekitar 3 jam 30
                </span>
              </div>
            </div>
          </div>
          <div className="w-full bg-primary bg-opacity-15 p-5 absolute right-0 h-full">
            <div className="flex gap-5">
              <div className="w-16 text-4xl h-16">
                <PlayButton />
              </div>
              <button className="text-4xl">
                <FaRegHeart />
              </button>
            </div>
            <ArboardLists items={tracks} />
          </div>
        </div>
      )}
    </>
  );
}

export default PlaylistPage;
