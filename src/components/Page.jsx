import React from "react";
import Header from "./Header/Index";
import Footer from "./Footer/Index";
import Venue from "./Venue";
import "./Page.css";


function Page() {
    return (
        <div className="Page">
            <Header />
            <Venue />
            <Footer />
        </div>
    );
}

export default Page;