import React from "react";
import Profie from "./Profile";

function Header() {
  return (
    <header class="header">
      <img src="" alt="Company Logo"></img>
      <input type="text" placeholder="Search.." />
      <button type="submit">Go</button>

      <Profie />
    </header>
  );
}

export default Header;
