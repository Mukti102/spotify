import React, { useEffect, useState, useRef } from "react";
import CurrentSong from "../molecules/CurrentSong";
import ControlSong from "../molecules/ControlSong";
import VolumeSong from "../molecules/VolumeSong";
import useStore from "../zustand/useAppStore";
function AudioControl() {
  const useQuery = useStore((state) => state.getQuery);
  const idTrack = useStore((state) => state.idTrack);
  const track = useStore((state) => state.track);
  const setTrack = useStore((state) => state.setTrack);
  const audio = useRef(new Audio());
  const { data, isLoading } = useQuery(`tracks/${idTrack}`, idTrack);
  useEffect(() => {
    setTrack(data?.data);
  }, [idTrack, data]);
  return (
    <div className="w-full h-[15%] items-center flex justify-between px-4 ">
      <CurrentSong item={track} />
      <ControlSong track={track?.preview_url} audio={audio} />
      <VolumeSong audio={audio} />
    </div>
  );
}

export default AudioControl;
