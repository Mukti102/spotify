import React from "react";

const IconButton = ({ icon, size }) => {
  return (
    <button className={`text-secondary hover:text-white ${size}`}>
      {icon}
    </button>
  );
};

export default IconButton;
