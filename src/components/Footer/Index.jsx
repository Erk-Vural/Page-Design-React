import React from "react";
import "./styles.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="footerLinks">
        <a href="#!">Privacy</a>
        <a href="#!">Terms of Service</a>
        <a href="#!">Blog</a>
        <a href="#!">Support</a>
        <a href="#!">Contact</a>
      </div>

      <p className="copyRight">{year} ⓒ Erk Vural</p>
    </footer>
  );
}

export default Footer;
