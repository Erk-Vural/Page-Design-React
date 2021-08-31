import React from "react";
import "./styles.css";
import Menu from "../Menu";

function FilterBy() {
  return (
    <div className="FilterBy">
      <img src="../List/Options/filter.png" alt="filter by"></img>
      <p>Filter By</p>
      <Menu
        options={[
          { value: "All", label: "All" },
          { value: "filterby2", label: "filterby2" },
          { value: "filterby3", label: "filterby3" },
        ]}
      />
    </div>
  );
}

export default FilterBy;
