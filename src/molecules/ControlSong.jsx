import React, { useEffect, useRef, useState } from "react";
import { IoIosPause, IoIosPlay } from "react-icons/io";
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";

function ControlSong({ track, audio }) {
  const [currentTime, setCurrentTime] = useState(null);
  const [play, setPlay] = useState(true);

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
    setPlay((prevPlay) => !prevPlay);
    if (
      audio.current.src === `http://localhost:5173/spotify/playlist/null` ||
      track === null
    ) {
      setPlay(false);
      alert("song i not available");
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
  const handleCurrentTime = (time) => (time >= 10 ? time : `0${time}`);
  return (
    <div className="sm:w-[50%] h-max flex  w-[20%] sm:flex flex-col justify-center items-center sm:h-full">
      <div className="flex gap-3 items-center">
        <button className="p-1  items-center rounded-full hidden sm:flex justify-center text-3xl text-secondary">
          <BiSkipPrevious />
        </button>
        <button
          onClick={onPlay}
          className=" bg-white  w-8 h-8 items-center rounded-full flex justify-center text-2xl text-black"
        >
          {play ? <IoIosPause /> : <IoIosPlay />}
        </button>
        <button className="p-1 hidden  items-center rounded-full sm:flex justify-center text-3xl text-secondary">
          <BiSkipNext />
        </button>
      </div>
      <div className="hidden sm:flex gap-2 justify-center w-full items-center">
        <span className="text-[10px] text-[#999]">
          0:{handleCurrentTime(currentTime?.toFixed("."))}
        </span>
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
          0:
          {audio.current.duration ? audio.current.duration.toFixed(".") : "30"}
        </span>
      </div>
    </div>
  );
}

export default ControlSong;
