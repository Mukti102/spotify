import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import Header from "../molecules/Header";
function SearchPage() {
  return (
    <>
      <Header input={true} />
      <Outlet />
    </>
  );
}

export default SearchPage;
