import React from "react";
import "./styles.css";
import Menu from "../Menu";

function ListBy() {
 return (
     <div className="ListBy">
         <img src="../List/Options/filter.png" alt="list by"></img>
        <p>List by</p>
        <Menu
        options={[
          { value: "Venue", label: "Venue" },
          { value: "listby2", label: "listby2" },
          { value: "listby3", label: "listby3" },
        ]} 
      />
     </div>
 );
}

export default ListBy;