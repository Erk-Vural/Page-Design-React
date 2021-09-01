import React from "react";
import "./styles.css";

import Profile from "./Profile";
import Options from "./Options";
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
        <Options />
        <Notifications />
        <Profile />
      </div>
    </div>
  );
}

export default Header;
