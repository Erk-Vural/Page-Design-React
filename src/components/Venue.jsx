import React, {useState} from "react";
import List from "./List/List";
import Options from "./List/Options";

function Venue() {
    const [layout, setLayout] = useState("Grid"); 

    function setGrid() {
        setLayout("Grid");
    }
    
    function setList() {
        setLayout("List");
    }

    return <div className="Venue">
        <h1>Venue</h1>
        <Options />
        <br />
        <button className="layoutBtn" onClick={setGrid}>Grid</button>
        <button className="layoutBtn" onClick={setList}>List</button>
        <br />
        <List 
            class = {layout}
        />
    </div>
}

export default Venue;