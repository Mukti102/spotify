import React from "react";
import { GrHomeRounded } from "react-icons/gr";
import Icon from "../atoms/Icon";
import { BiSearch } from "react-icons/bi";
function Navbar() {
  return (
    <nav className="w-full h-[25%] flex flex-col justify-center gap-1 px-3 py-3 bg-primary rounded-lg">
      <Icon size={"text-xl"} icon={<GrHomeRounded />} page={""}>
        Home
      </Icon>
      <Icon size={"text-2xl"} page={"search"} icon={<BiSearch />}>
        Search
      </Icon>
    </nav>
  );
}

export default Navbar;
