import React, { useState } from "react";
import { MdOutlineWatchLater } from "react-icons/md";
import SingleList from "../atoms/SingleList";
function ArboardLists({ items }) {
  return (
    <div className="w-full mt-5">
      <div className="overflow-x-auto">
        <table className="table ">
          {/* head */}
          <thead>
            <tr className="text-sm">
              <th className="w-9 h-9 flex justify-center items-center">#</th>
              <th>Title</th>
              <th>Album</th>
              <th className="text-xl">
                <MdOutlineWatchLater />
              </th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {items?.map((item, index) => {
              return <SingleList item={item} index={index} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ArboardLists;
