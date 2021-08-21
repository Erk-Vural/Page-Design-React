import React, { useState } from "react";
import "./styles.css";

import Item from "./Item";
import Options from "./Options/Index";
import list from "../../list";

function List() {
    const [layout, setLayout] = useState("Grid");

  function getLayout(newLayout) {
      setLayout(newLayout);
  }

  return (
    <div className={layout}>
      <button>Hide List</button>
      <Options getLayout={getLayout} />

      {list.map((listItem) => (
        <Item
          key={listItem.key}
          icon={listItem.icon}
          title={listItem.title}
          description={listItem.description}
        />
      ))}
    </div>
  );
}

export default List;
