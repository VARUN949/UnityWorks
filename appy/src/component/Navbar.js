import React from "react";
import img from "../icons/menu_white.png";
// import "../abc.css";
export default function navbar() {
  window.addEventListener("scroll", () => {
    console.log("abc");

    if (window.pageYOffset < 560 && window.innerWidth>1012) {
      console.log(window.pageYOffset);
      console.log("varun");
      document.getElementById("navbar_id").style.background =
        "linear-gradient(to left, white 28vw, #CC6767 28vw)";
    } else if (window.pageYOffset > 560) {
      document.getElementById("navbar_id").style.background = "#CC6767";
      console.log("vv");
    }
  });
  return (
    <>
      <div className="navbar" id="navbar_id">
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
