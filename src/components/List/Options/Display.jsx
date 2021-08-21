import React from "react";

function Display(props) {
  return (
    <div>
      <button
        onClick={() => {
          props.layout("Grid");
        }}
      >
        <span>Grid</span>
      </button>
      <button
        onClick={() => {
          props.layout("List");
        }}
      >
        <span>List</span>
      </button>
    </div>
  );
}

export default Display;
