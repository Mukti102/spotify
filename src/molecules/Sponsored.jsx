import React from "react";

function Sponsored() {
  return (
    <div className="w-full py-5 px-4 flex gap-6  items-center h-64 bg-[#000] rounded-md mt-1">
      <div className="flex-none w-52 h-52 overflow-hidden ">
        <img
          src="https://i.pinimg.com/originals/6f/c2/38/6fc2389d5577dff9a03216a4c3326bca.jpg"
          alt="sponsored"
          className="w-full h-full object-cover"
        />
      </div>
      <div className=" w-auto gap-4 flex flex-col justify-center h-full">
        <h1 className="text-6xl text-white font-bold">Indonesia Terbaik</h1>
        <p className="text-xs text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil culpa
          maiores commodi sed delectus officia facere molestiae soluta beatae.
          Ut.
        </p>
        <div className="flex gap-5">
          <button className="text-sm px-7 text-black font-bold rounded-full  py-3 bg-green-500 w-max hover:scale-105">
            Play
          </button>
          <button className="text-sm px-7  font-bold rounded-full  py-1 border-[1px] text-white border-secondary hover:scale-105 hover:border-white w-max">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sponsored;
