import React, { useState } from "react";
import "./styles.css";

import FilterBy from "./FilterBy";
import ListBy from "./ListBy";
import Sort from "./Sort";
import Tag from "./Tag";
import Display from "./Display";

function Index(props) {
  const [layout, setLayout] = useState("Grid");

  function readLayout(newLayout) {
    setLayout(newLayout);
  }

  return (
    <div className="Options">
      <FilterBy />
      <ListBy />
      <Sort />
      <Tag />
      <div
        onClick={() => {
          props.getLayout(layout);
        }}
      >
        <Display layout={readLayout} />
      </div>
    </div>
  );
}

export default Index;
