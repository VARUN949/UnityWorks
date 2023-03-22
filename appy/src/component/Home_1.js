import React from "react";
import Navbar from "./Navbar";
import "../App.css";
import background_2 from "../images/background-2.jpg";
import background_1 from "../images/background-1.jpg";
import background_3 from "../images/background-3.jpg";
import background from "../images/background.png";

export default function home() {
  return (
    <div>
      <div className="home_1_container">
      <div className="container">
        <Navbar />
        <div className="home_first_container">
          <div className="global left_container">
            <div className="home_content">
              <p className="quote">Alone we can do </p>
              <p className="quote">So little Together we can do</p>
              <p className="quote">So much</p>
              <p className="sentence">
                By helping each other we can spread more
              </p>
              <p className="sentence">Happiness to others</p>

              <div className="home_login-buttons home_1_login_buttons">
                <button className="home_1_button1 home_btn">Login</button>
                <button className="home_1_button2 home_btn">Sign Up</button>
              </div>
            </div>
            <div className="dummy_class">
              <div className="home_1_boxs">
                <div className="home_1_box_detail">
                  <img src={background_1} alt="" />
                </div>
                <div className="home_1_box_detail">
                  <img src={background_2} alt="" />
                </div>
                <div className="home_1_box_detail">
                  <img src={background_3} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="global_right right_container">
            <div className="home_1_right_container">
              <img src={background} alt="" />
            </div>
            <div className="va">
              <div className="circle_section">
                <div className="inner_circle">
                  <div className="circle_section_box2">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                  </div>
                  <div className="circle_section_box2">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                  </div>
                  <div className="circle_section_box2">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                  </div>
                  <div className="circle_section_box2">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                  </div>
                  
                </div>

                {/* <div className="inner_circle">
                
              </div> */}
              </div>
            </div>
          </div>
          </div>
          </div>
      </div>
    </div>
  );
}
