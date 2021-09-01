import React from "react";
import "./styles.css";

import FilterBy from "./FilterBy";
import ListBy from "./ListBy";
import Sort from "./Sort";
import Tag from "./Tag";

function Index(props) {
  const Display = (
    <div className="Display">
      <button
        onClick={() => {
          props.getLayout("List");
          
        }}
      >
        <img
          className="display-list"
          src="../List/Options/list.png"
          alt="List"
        ></img>
      </button>
      <button
        onClick={() => {
          props.getLayout("Grid");
        }}
      >
        <img
          className="display-grid"
          src="../List/Options/grid.png"
          alt="Grid"
        ></img>
      </button>
    </div>
  );

  return (
    <div className="Options">
      <ListBy />
      <Tag />
      <FilterBy />
      <Sort />
      {Display}
    </div>
  );
}

export default Index;
