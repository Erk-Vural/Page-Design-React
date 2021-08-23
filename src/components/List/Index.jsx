import React, { useState } from "react";
import Pagination from "@material-ui/lab/Pagination";
import "./styles.css";

import Item from "./Item";
import Options from "./Options/Index";
import list from "../../list";

function List() {
  const [layout, setLayout] = useState("Grid");
  const [page, setPage] = React.useState(1);
  let itemLimit = 5;

  const handleChange = (event, value) => {
    setPage(value);
  };

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
    let lastItem = page * itemLimit;
    let firstItem = lastItem - itemLimit;

    return list.map((listItem, index) => {
      if (index >= firstItem && index < lastItem) {
        return (
          <Item
            key={listItem.key}
            icon={listItem.icon}
            title={listItem.title}
            description={listItem.description}
          />
        );
      }
    });
  }

  function hideList() {}

  return (
    <div className={layout}>
      <div className="hideList">
        <button onClick={hideList}>Hide List</button>
      </div>

      <Options getLayout={getLayout} />

      {getTotalResult()}

      <div className="listItems">{listItems()}</div>

      <div className="pagination">
        <Pagination
          count={list.length}
          color="primary"
          page={page}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default List;
