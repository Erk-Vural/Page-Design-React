import React from "react";

function Item(props) {
return (
    <div className="Item">
        <img src={props.icon} alt="Item_icon"></img>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
    </div>
);
}

export default Item;