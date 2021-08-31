import React from "react";
import Menu from "../Menu";

function Sort() {
 return (
     <div className="Sort">
         <img src="../List/Options/sort.png" alt="sort by"></img>
        <p>Sort</p>
        <Menu
        options={[
          { value: "CreatedDate", label: "Create Date" },
          { value: "sort2", label: "sort2" },
          { value: "sort3", label: "sort3" },
        ]}
      />
     </div>
 );
}

export default Sort;