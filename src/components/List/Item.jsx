import React, { useState } from "react";
import "./styles.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

function Item(props) {
  const [isClicked, setClicked] = useState(false);
  const options = ["one", "two", "three"];
  const defaultOption = options[0];

  const handleClick = () => {
    setClicked(!isClicked);
  };

  function showButton() {
    if (isClicked) {
      return (
        <Dropdown
          options={options}
          value={defaultOption}
          placeholder="Select an option"
        />
      );
    }
  }

  return (
    <div className="Item">
      <img src={props.icon} alt="Item_icon"></img>
      <div className="info">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>

      <button onClick={handleClick} className="itemBtn">
        :
      </button>
      {showButton()}
    </div>
  );
}

export default Item;
