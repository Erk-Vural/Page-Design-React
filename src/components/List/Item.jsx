import React from "react";
import "./styles.css";
import Menu from "./Menu";

function Item(props) {
  return (
    <div className="Item">
      <img src={props.icon} alt="Item_icon"></img>
      <div className="info">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
      <Menu />
    </div>
  );
}

export default Item;
