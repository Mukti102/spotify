import React, { useState } from "react";
import useStore from "../zustand/useAppStore";
import { convert } from "../utils/function/convertNumber";
import { IoIosPause, IoIosPlay } from "react-icons/io";
import { handleContent } from "./Card";
function SingleList({ item, index }) {
  const [hover, setHover] = useState(false);
  const useQuery = useStore((state) => state.getQuery);
  const { data } = useQuery(`tracks/${item?.id}`, [item?.id]);
  const images = data?.data?.album?.images[0]?.url;
  const name = data?.data?.album?.name;
  const handleClick = useStore((state) => state.getIdTrack);
  return (
    <tr
      key={index}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`${hover ? "bg-[#222]" : "bg-none"}`}
    >
      <th className="flex w-9 h-9 mt-3 justify-center items-center">
        {hover ? (
          <button
            onClick={() => handleClick(item?.id)}
            className="text-xl text-white"
          >
            <IoIosPlay />
          </button>
        ) : (
          index + 1
        )}
      </th>
      <td>
        <div className="flex gap-2">
          <div className="w-11 h-11 rounded-md overflow-hidden">
            <img src={item?.album?.images[0]?.url || images} alt="" />
          </div>
          <div>
            <h1 className="text-white font-bold">
              {handleContent(item?.name, 17)}
            </h1>
            <h1>{item?.artists[0]?.name}</h1>
          </div>
        </div>
      </td>
      <td>{item?.album?.name || name}</td>
      <td>{convert(item?.duration_ms)}</td>
    </tr>
  );
}

export default SingleList;
