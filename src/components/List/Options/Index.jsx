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
        props.getLayout("Grid");
      }}
    >
      <span>Grid</span>
    </button>
    <button
      onClick={() => {
        props.getLayout("List");
      }}
    >
      <span>List</span>
    </button>
  </div>
  );

  return (
    <div className="Options">
      <FilterBy />
      <ListBy />
      <Sort />
      <Tag />
      {Display}
    </div>
  );
}

export default Index;
