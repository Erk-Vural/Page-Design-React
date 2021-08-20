import React from "react";
import Header from "./Header/Index";
import Footer from "./Footer/Index";
import List from "./List/Index";
import "./Venue.css";


function Venue() {
    return (
        <div className="Venue">
            <p>Venue</p>
            <List />
        </div>
    );
}

export default Venue;