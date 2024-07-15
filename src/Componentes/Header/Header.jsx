import React from "react";
import Navbar from "./Navbar";

import Search from "./Search";
import "./Header.css";


const Header = () => {
  return (
    <>
      <Navbar />
      
      <Search/>
      
    </>
  );
};

export default Header;