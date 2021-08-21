import React from "react";
import "./styles.css";

import Profile from "./Profile";
import Menu from "./Menu";

function Header() {
  return (
    <div className="Header">
      <img src="" alt="Company Logo"></img>
      <input type="text" placeholder="Search.." />
      <button type="submit">Go</button>
      <Menu />
      <a href="">Notifications</a>
      <Profile />
    </div>
  );
}

export default Header;
