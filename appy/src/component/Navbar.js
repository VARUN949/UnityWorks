import React from "react";
import img from "../icons/menu_white.png";
import { Link } from "react-router-dom";

export default function navbar() {
  window.addEventListener("scroll", () => {
    if (window.pageYOffset < 560 && window.innerWidth > 1012) {
      console.log(window.pageYOffset);

      document.getElementById("navbar_id").style.background =
        "linear-gradient(to left, white 28vw, #CC6767 28vw)";
    } else if (window.pageYOffset > 560) {
      document.getElementById("navbar_id").style.background = "#CC6767";
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
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/">Program</Link>
            </li>
            <li>
              <Link to="/">Donor</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="login_menu">
          <div className="login-buttons">
            <Link to="/Login" className="Login-buttons_Link">
              <button className="button1" type="submit">
                Login
              </button>
            </Link>
            <Link to="/" className="Login-buttons_Link">
              <button type="submit" className="button2">
                Sign Up
              </button>
            </Link>
          </div>
          <div className="menu_icon">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
