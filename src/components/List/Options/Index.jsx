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
        className="listBtn"
        onClick={() => {
          props.getLayout("List");
        }}
      >
        <img
          className="listImg"
          src="../List/Options/list.png"
          alt="List"
        ></img>
      </button>
      <button
        className="gridBtn"
        onClick={() => {
          props.getLayout("Grid");
        }}
      >
        <img
          className="gridImg"
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
