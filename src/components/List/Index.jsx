import React, { useState } from "react";
import Pagination from "@material-ui/lab/Pagination";
import "./styles.css";

import Item from "./Item";
import Options from "./Options/Index";
import list from "../../list";

function List() {
  const [layout, setLayout] = useState("Grid");
  const [page, setPage] = useState(1);
  const [hidden, setHidden] = useState(false);
  let itemLimit = 5;

  const handleChange = (event, value) => {
    setPage(value);
  };

  const getLayout = (newLayout) => {
    setLayout(newLayout);
  };

  const getHidden = () => {
    setHidden(!hidden);
  };

  function showList() {
    if (hidden) {
      return (
        <div>
          <p>The list is hidden.</p>
        </div>
      );
    } else {
      return (
        <div>
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

  return (
    <div className={layout}>
      <div className="hideList">
        <button onClick={getHidden}>Hide List</button>
      </div>

      <Options getLayout={getLayout} />

      {showList()}
    </div>
  );
}

export default List;
