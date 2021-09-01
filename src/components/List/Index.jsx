import React, { useState } from "react";
import Pagination from "@material-ui/lab/Pagination";
import "./styles.css";

import Item from "./Item";
import Options from "./Options/Index";
import list from "../../list";

function List() {
  const [layout, setLayout] = useState("List");
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

  const showList = () => {
    if (hidden) {
      return (
        <div>
          <p>The list is hidden.</p>
        </div>
      );
    } else {
      return (
        <div>
          <div className="listTop">
            {getTotalResult()}

            <button className="listBtn">
              <img src="../List/list-btn.png" alt="list-btn"></img>
            </button>
          </div>

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
  };

  const getTotalResult = () => {
    return <p className="totalResults">Showing {list.length} results</p>;
  };

  const listItems = () => {
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
            layout={layout}
          />
        );
      }
    });
  };

  return (
    <div className={layout}>
      <div className="hideList">
        <button onClick={getHidden}>
          <span>Hide List</span>{" "}
          <img src="../List/Options/up.png" alt="up"></img>
        </button>
      </div>

      <Options getLayout={getLayout} />

      {showList()}
    </div>
  );
}

export default List;
