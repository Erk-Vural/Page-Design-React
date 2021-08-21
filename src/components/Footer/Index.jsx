import React from "react";
import "./styles.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <a href="">Privacy</a>
      <a href="">Terms of Service</a>
      <a href="">Blog</a>
      <a href="">Support</a>
      <a href="">Contact</a>
      <p>Erk Vural</p>
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
