import React from "react";
import "./styles.css";
import Menu from "./Menu";

function Options() {
    return (
        <div className= "Menu">
      
            <Menu 
        src = "../Header/menu.png"
        options={[
            { value: "one", label: "one" },
            { value: "two", label: "two" },
          ]}
      />
        </div>
    );
}

export default Options;