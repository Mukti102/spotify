import React from "react";
import LibraryHead from "../molecules/LibraryHead";
import LibraryList from "../molecules/LibraryList";
function Library() {
  return (
    <div className="w-full h-[75%] bg-primary rounded-lg">
      <LibraryHead />
      <LibraryList />
    </div>
  );
}

export default Library;
