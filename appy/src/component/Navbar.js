import React from "react";
import img from "../icons/menu_white.png";
// import "../abc.css";
export default function navbar() {
  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <p>UnityWroks</p>
        </div>

        <div className="nav-items">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Program</a>
            </li>
            <li>
              <a href="/">Donor</a>

            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
        <div className="login_menu">
          <div className="login-buttons">
            <button className="button1">Login</button>
            <button className="button2">Sign Up</button>
          </div>
          <div className="menu_icon">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
