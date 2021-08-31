import React from "react";
import "./styles.css";

import Profile from "./Profile";
import Menu from "./Menu";
import Notifications from "./Notifications";
import SearchBar from "./SearchBar";

function Header() {


  const CompanyLogo = (
    <img src="../Header/company.png" alt="company_logo"></img>
  );

  return (
    <div className="Header">
      <div className="wrapper">
        <div className="CompanyLogo">{CompanyLogo}</div>
        <SearchBar />
        <Menu />
        <Notifications />
        <Profile />
      </div>
    </div>
  );
}

export default Header;
