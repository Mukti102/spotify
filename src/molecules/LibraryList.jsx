import React from "react";
import CardList from "../atoms/CardList";
import { axiosInstance } from "../utils/callDataApi";
import useStore from "../zustand/useAppStore";
import { useQuery } from "@tanstack/react-query";
function LibraryList() {
  const token = useStore((state) => state.token);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["callApi"],
    queryFn: async () => {
      const res = await axiosInstance("me/playlists", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      return res.data.items;
    },
  });
  return (
    <div className="w-full h-[70%] relative overflow-y-auto scroll-bar  flex flex-col gap-1  pl-3 pr-1 py-2">
      <div className="w-[220px] h-max">
        {isLoading && <h1>Loading....</h1>}
        {data?.map((item, index) => {
          return <CardList item={item} key={index} />;
        })}
      </div>
    </div>
  );
}

export default LibraryList;
