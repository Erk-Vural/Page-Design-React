import React from "react";
import Header from "./Header/Header";
import Venue from "./Venue";
import Footer from "./Footer.jsx";


function Page(props) {
return <div className="Page">
    <Header />
    <Venue  />
    <Footer />
</div>
}

export default Page;