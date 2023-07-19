import React from "react";
import { Link } from "react-router-dom";
import email from "../icons/email.png";
import password from "../icons/password.png";
import { useEffect } from "react";
import "../App.css";


export default function Login() {
  useEffect(() => {
      document.getElementById("navbar_id").style.position = "unset";
      if (window.location.pathname === "/Login") {
          console.log("lloo")
          document.getElementById("navbar_id").style.background = "#CC6767";
          document.getElementsByClassName("login_menu")[0].style.display = "none";
      }
      
    
  }, []);
 
    
    
  const Signup_page = () => {
    console.log("entered");
    document.getElementById("left1_40").style.animationName = "op_incre";
      document.getElementById("right1_60").style.animationName = "op_incre";
      document.getElementById("left2_40").style.animationName = "op_decre";
      document.getElementById("right2_60").style.animationName = "op_decre";
      document.getElementById("Login_slider").style.animationName = "slider_return";
  };
  const SignIn_page = () => {
    console.log("entered2");
      document.getElementById("left1_40").style.animationName = "op_decre";
      document.getElementById("right1_60").style.animationName = "op_decre";
      document.getElementById("left2_40").style.animationName = "op_incre";
      document.getElementById("right2_60").style.animationName = "op_incre";
      document.getElementById("Login_slider").style.animationName = "slider";

  };

  return (
    <div>
      <div className="Login_container" id="Login_container_id">
        <div className="login_inner_container">
          <div className="Login_left_content " id="left1_40">
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
          <div className="Login_right_content " id="right1_60">
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
                <button type="submit" className="">
                  Sign In
                </button>
              </Link>
            </div>
          </div>
          <div className="Login_right_content "id="left2_40">
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
          <div className="Login_left_content "id="right2_60">
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
                <div id="Login_slider"></div>
        </div>
      </div>

      
    </div>
  );
}
