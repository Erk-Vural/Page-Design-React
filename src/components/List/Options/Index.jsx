import React from "react";
import Display from "./Display";
import FilterBy from "./FilterBy";
import ListBy from "./ListBy";
import Sort from "./Sort";
import Tag from "./Tag";

function Index() {
 return (
     <div className="Index">
        <p>Options</p>
        <Display />
        <FilterBy/>
        <ListBy />
        <Sort />
        <Tag />
     </div>
 );
}

export default Index;