import React from "react";
import "./styles.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Erk Vural</p>
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
