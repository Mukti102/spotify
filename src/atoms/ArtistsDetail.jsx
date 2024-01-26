import React, { useEffect, useState } from "react";
import useStore from "../zustand/useAppStore";
function ArtistsDetail({ artistId }) {
  const useQuery = useStore((state) => state.getQuery);
  const [artistDetail, setArtistDetail] = useState(null);
  const { data, isLoading } = useQuery(`artists/${artistId}`, artistId);
  useEffect(() => {
    if (data && artistId) {
      setArtistDetail(data?.data);
    } else return;
  }, [data]);
  console.log(artistDetail);
  return (
    <div className="mt-5 w-full rounded-md my-2 h-80 overflow-hidden bg-[#333]">
      <div className="w-full overflow-hidden  h-[55%] bg-black relative">
        <span className=" z-10 absolute top-3 left-3 text-sm font-semibold text-white">
          About the artist
        </span>
        <img
          src={artistDetail?.images[0]?.url ? artistDetail?.images[0]?.url : ""}
          alt=""
          className="brightness-75 w-full h-full object-cover"
        />
      </div>
      <div className="w-full p-2">
        <h1 className="font-semibold">{artistDetail?.name}</h1>
        <div className="flex justify-between items-center">
          <span className="text-sm">
            {artistDetail?.followers?.total} Followers
          </span>
          <button className="px-4 py-1 bg-transparent border-white border-[.9px] text-white text-sm rounded-full">
            Follow
          </button>
        </div>
        <p className="text-xs mt-4 text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
          accusantium maiores nesciunt ducimus quis autem!
        </p>
      </div>
    </div>
  );
}

export default ArtistsDetail;
