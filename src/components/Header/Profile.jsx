import React from "react";
import "./styles.css";

function Profile() {
  return (
    <div className="Profile">
      <img src="../Header/profile.png" alt="profile-icon"></img>
      <div className="info">
        <h1>James Faraday</h1>
        <p>Faraday Networks</p>
      </div>
      <div className="down">
      <img src="../Header/down.png" alt="down"></img>
      </div>
      
    </div>
  );
}

export default Profile;
