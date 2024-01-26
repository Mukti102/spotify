import React, { useState, useEffect } from "react";
import useStore from "../zustand/useAppStore";
import CardCategory from "../atoms/CardCategory";
function Categories() {
  const [items, setItems] = useState([]);
  const getQuery = useStore((state) => state.getQuery);
  const { data, isLoading } = getQuery("browse/categories");
  useEffect(() => {
    if (data) {
      setItems(data?.data?.categories?.items);
    }
  }, [data]);
  return (
    <div className="p-4 mt-16">
      <h1 className="text-2xl my-4 text-white font-bold ">Categories</h1>
      <div className="flex gap-2 flex-wrap">
        {isLoading && <h1>Loading...</h1>}
        {items?.map((item, index) => {
          return (
            <CardCategory
              Title={item?.name}
              image={item?.icons[0]?.url}
              key={index}
              id={item.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
