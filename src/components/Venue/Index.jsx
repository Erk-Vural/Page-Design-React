import React from "react";
import "./styles.css";

import List from "../List/Index";
import Arrange from "./Arrange";

function Venue() {
  const Map = (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6354048.188095173!2d35.174414!3d38.95682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2str!4v1629555228068!5m2!1sen!2str"
      width="100%"
      height="400px"
      
      loading="lazy"
      title="Map"
    ></iframe>
  );

  return (
    <div className="Venue">
       <h1>Venue</h1>
      <Arrange />
      {Map}
      <List />
    </div>
  );
}

export default Venue;
