import React from "react";
import "./styles.css";
import Menu from "./Menu";

function Item(props) {

  const checkMenu = () => {
    if(props.layout === "List") {
      return (
        <Menu
        options={[
          { value: "item1", label: "item1" },
          { value: "item2", label: "item2" },
          { value: "item3", label: "item3" },
        ]}
        title = ":"
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
      {checkMenu()}

    </div>
  );
}

export default Item;
