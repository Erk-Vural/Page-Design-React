import React from "react";
import Menu from "./Menu";

function Arrange() {
  return (
    <div className="Arrange">
      <p>Arrange by</p>
      <Menu 
        options = {[
          { value: "All Companies", label: "All Companies" },
          { value: "two", label: "Two" },
        ]}
      />
    </div>
  );
}

export default Arrange;
