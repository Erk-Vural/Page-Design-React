import React from "react";
import "./styles.css";
import Menu from "./Menu";

function Profile() {
  return (
    <div className="Profile">
      <img src="../Header/profile.png" alt="profile-icon"></img>
      <div className="info">
        <h1>James Faraday</h1>
        <p>Faraday Networks</p>
      </div>

      <div className="down">
        <Menu
          src="../Header/down.png"
          options={[
            { value: "one", label: "one" },
            { value: "two", label: "two" },
          ]}
        />
      </div>
    </div>
  );
}

export default Profile;
