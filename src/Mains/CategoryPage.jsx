import React from "react";
import useStore from "../zustand/useAppStore";
import { useParams } from "react-router";
import TopPlaylists from "../templates/TopPlaylists";
import Header from "../molecules/Header";
function CategoryPage() {
  const useQuery = useStore((state) => state.getQuery);
  const params = useParams();
  const id = params.id;
  const { data } = useQuery(`browse/categories/${id}`, [`single${id}`]);
  return (
    <>
      <Header input={false} />
      <div className="w-full pt-20 h-full bg-gradient-to-t from-primary from-3%  to-green-400 px-5">
        <div className="w-full h-52  flex items-center">
          <h1 className="text-7xl font-bold text-white">{data?.data?.name}</h1>
        </div>
        <div className="w-full bg-primary bg-opacity-15 p-5 absolute right-0 h-full">
          <TopPlaylists
            url={`browse/categories/${id}/playlists`}
            Title={data?.data?.name}
            showAll={false}
          />
        </div>
      </div>
    </>
  );
}

export default CategoryPage;
