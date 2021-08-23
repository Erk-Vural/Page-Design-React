import React from "react";
import "./styles.css";

import Profile from "./Profile";
import Menu from "./Menu";

function Header() {
  const SearchBar = (
    <form className="SearchBar">
      <input type="text" placeholder="Search.." />
      <button type="submit">Go</button>
    </form>
  );

  const CompanyLogo = (<img classname="Logo" src="" alt="Company_Logo"></img>
  );

  const Notifications = (
    <a className="Notifications" href="#!">
      Notifications
    </a>
  );

  return (
    <div className="Header">
      <div className="wrapper">
        <div>{CompanyLogo}</div>
        <div>{SearchBar}</div>
        <div>
          <Menu />
        </div>
        <div>
          {Notifications}
        </div>
        <div>
          <Profile />
        </div>
      </div>
    </div>
  );
}

export default Header;
