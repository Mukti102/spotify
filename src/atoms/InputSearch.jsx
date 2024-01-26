import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router";

function InputSearch() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const inputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`${inputValue}`);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="mx-3 px-3 py-2  group rounded-full bg-[#333] flex items-center"
    >
      <button className="text-xl">
        <BiSearch />
      </button>
      <input
        type="text"
        value={inputValue}
        onChange={inputChange}
        placeholder="What do you want to listen to ?"
        className="bg-transparent outline-none placeholder:text-[12px] px-2"
      />
    </form>
  );
}

export default InputSearch;
