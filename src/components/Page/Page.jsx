import React from "react";
import "./styles.css";

import Header from "../Header/Index";
import Footer from "../Footer/Index";
import Venue from "../Venue/Index";


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