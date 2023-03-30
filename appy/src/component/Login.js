import React from "react";
import { Link } from "react-router-dom";
import email from "../icons/email.png";
import password from "../icons/password.png";
import Navbar from "./Navbar";
import { useEffect } from "react";

export default function Login() {
  useEffect(() => {
    document.getElementById("navbar_id").style.background = "#CC6767";
    document.getElementById("navbar_id").style.position = "unset";
    document.getElementsByClassName("login_menu")[0].style.display = "none";
  }, []);

  const Signup_page = () => {
    console.log("entered");
    document.getElementById("singup_container_id").style.display = "none";
    document.getElementById("Login_container_id").style.display = "flex";
  };
    const SignIn_page = () => {
        console.log("entered2");
    document.getElementById("singup_container_id").style.display = "flex";
    document.getElementById("Login_container_id").style.display = "none";
  };

  return (
    <div>
      <div className="Login_container" id="Login_container_id">
        <div className="login_inner_container">
          <div className="Login_left_content">
            <div className="login_Welcome_back">Welcome Back!</div>
            <div className="login_welcome_back_content">
              To keep connect with ous please login with your personal info
            </div>
            <div className="login_signup_button">
              <Link to="" className="">
                <button type="submit" className="" onClick={SignIn_page}>
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
          <div className="Login_right_content">
            <div className="login_right_unityworks">UnityWorks</div>
            <div className="Login_sign_into_unityworks">
              Sign in to UnityWorks
            </div>
            <div className="Login_G_F">
              <div className="Login_circle">G</div>
              <div className="Login_circle">f</div>
            </div>
            <div className="Login_or_use">
              or use your email for registration
            </div>
            <div className="Login_email_password">
              <div className="Login_email">
                <img src={email} alt="" />
                <input type="textbox" placeholder="Email" />
              </div>
              <div className="Login_password">
                <img src={password} alt="" />
                <input type="password" placeholder="Password" />
              </div>
            </div>

            <div className="Login_Forgot_password">Forgot your password?</div>
            <div className="login_signup_button_right">
              <Link to="/" className="">
                <button type="submit" className="" >
                  Sign In
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="singup_container" id="singup_container_id">
        <div className="login_inner_container">
          <div className="Login_right_content">
            <div className="signup_right_unityworks">UnityWorks</div>
            <div className="Login_sign_into_unityworks">Create Account</div>
            <div className="Login_G_F">
              <div className="Login_circle">G</div>
              <div className="Login_circle">f</div>
            </div>
            <div className="Login_or_use">or use your email account</div>
            <div className="Login_email_password">
              <div className="Login_email">
                <img src={email} alt="" />
                <input type="textbox" placeholder="Email" />
              </div>
              <div className="Login_password">
                <img src={password} alt="" />
                <input type="password" placeholder="Password" />
              </div>
              <div className="Login_password">
                <img src={password} alt="" />
                <input type="password" placeholder="Password" />
              </div>
            </div>

            <div className="signup_login__button_right login_signup_button_right">
              <Link to="/" className="">
                <button type="submit" className="">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
          <div className="Login_left_content">
            <div className="signup_right_unityworks_right">UnityWorks</div>
            <div className="login_Welcome_back">Hello, Friend!</div>
            <div className="login_welcome_back_content">
              Sign up and contribute yourself to society to help create a better
              and more inclusive community for all.
            </div>
            <div className="login_signup_button">
              <Link to="">
                <button type="" onClick={Signup_page}>
                  Sign In
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
