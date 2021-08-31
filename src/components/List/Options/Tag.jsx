import React from "react";
import "./styles.css";
import Menu from "../Menu";

function Tag() {
  return (
    <div className="Tag">
      <img src="../List/Options/tag.png" alt="tag"></img>
      <p>Tag</p>
      <Menu
        options={[
          { value: "All", label: "All" },
          { value: "tag2", label: "tag2" },
          { value: "tag3", label: "tag3" },
        ]}
      />
    </div>
  );
}

export default Tag;
