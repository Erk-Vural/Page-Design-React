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

  function getTotalResult() {
    return (
      <div>
        <p className="totalResults">Showing {list.length} results</p>
      </div>
    );
  }

  function listItems() {
    return (
      <div className="listItems">
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

  function hideList() {
    
  }

  return (
    <div className={layout}>
      <div className="hideList">
        <button onClick={hideList}>Hide List</button>
      </div>
      
      <Options getLayout={getLayout} />

      {getTotalResult()}

      {listItems()}
    </div>
  );
}

export default List;
