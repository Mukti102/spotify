import React, { useEffect, useRef, useState } from "react";
import { IoIosPause, IoIosPlay } from "react-icons/io";
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import { msToMinSec } from "../utils/function/msToMinutesAndSecond";
function ControlSong({ track, audio }) {
  const [currentTime, setCurrentTime] = useState(null);
  const [play, setPlay] = useState(false);
  const style = {
    background: `linear-gradient(to right,white ${hitungPersentase(
      audio.current.currentTime,
      30
    )}%,#333 ${hitungPersentase(audio.current.currentTime, 30)}%)`,
  };

  //fungsi menemukan persentase dari sebuah angka yang sudah ditentukan
  function hitungPersentase(nilaiAwal, nilaiDitentukan) {
    return (nilaiAwal / nilaiDitentukan) * 100;
  }

  const onPlay = () => {
    setPlay(!play);
    if (
      audio.current.src === `http://localhost:5173/spotify/playlist/null` ||
      track === null
    ) {
      alert("song i not available");
      setPlay(false);
      return;
    } else {
      if (play) {
        audio.current.pause();
      } else {
        audio.current.play();
      }
    }
  };

  useEffect(() => {
    setPlay(false);
    audio.current.src = track;
    audio.current.addEventListener("timeupdate", () =>
      setCurrentTime(audio.current.currentTime)
    );
    return () => {
      audio.current.removeEventListener("timeupdate", () =>
        setCurrentTime(audio.current.currentTime)
      );
    };
  }, [track]);

  useEffect(() => {
    audio.current.ended ? setPlay(false) : setPlay(true);
  }, [audio.current.ended]);

  const handleChange = (e) => {
    audio.current.currentTime = e.target.value;
  };
  const handleDuration = (duration) => {
    const minutes = parseInt(String(duration).split(".")[0]);
    const second = parseInt(msToMinSec(String(duration).split(".")[1]));
    return `${parseInt(minutes)} : ${parseInt(second)}`;
  };
  return (
    <div className="w-[50%] flex flex-col justify-center items-center h-full">
      <div className="flex gap-3 items-center">
        <button className="p-1  items-center rounded-full flex justify-center text-3xl text-secondary">
          <BiSkipPrevious />
        </button>
        <button
          onClick={onPlay}
          className=" bg-white w-8 h-8 items-center rounded-full flex justify-center text-2xl text-black"
        >
          {play ? <IoIosPause /> : <IoIosPlay />}
        </button>
        <button className="p-1  items-center rounded-full flex justify-center text-3xl text-secondary">
          <BiSkipNext />
        </button>
      </div>
      <div className="flex gap-2 justify-center w-full items-center">
        <span className="text-[10px] text-[#999]">{"0:00"}</span>
        <input
          type="range"
          value={currentTime}
          min={0}
          max={30}
          step={0.1}
          onChange={handleChange}
          className="track  w-[70%] h-[4px]"
          style={style}
        />
        <span className="text-[10px] text-[#999]">
          {handleDuration(audio.current.duration)}
        </span>
      </div>
    </div>
  );
}

export default ControlSong;
