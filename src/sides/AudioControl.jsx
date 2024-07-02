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
  const [mute, setMute] = useState(false);
  const handleMute = () => {
    setMute(!mute);
    !mute ? (audio.current.muted = true) : (audio.current.muted = false);
  };
  const { data, isLoading } = useQuery(`tracks/${idTrack}`, idTrack);
  useEffect(() => {
    setTrack(data?.data);
  }, [idTrack, data]);
  if (track && isLoading === false) {
    return (
      <div className="w-full  sm:h-[15%] h-[10%] sm:static fixed right-0 left-0 items-center flex justify-between px-4 ">
        <CurrentSong item={track} />
        <ControlSong track={track?.preview_url} audio={audio} />
        <VolumeSong audio={audio} handleMute={handleMute} mute={mute} />
      </div>
    );
  } else {
    <></>;
  }
}

export default AudioControl;
