import React from "react";
import Navbar from "./Navbar";
import background_2 from "../images/background-2.jpg";
import background_1 from "../images/background-1.jpg";
import background_3 from "../images/background-3.jpg";
import background from "../images/background.png";
export default function Home_1() {
  return (
    <div>
      <div className="home-1_container_1">
        <div className="home_1_container_left">
          <div className="home_1_container_left_content">
            <p className="quote">Alone we can do </p>
            <p className="quote">So little Together we can do</p>
            <p className="quote">So much</p>
            <p className="sentence">By helping each other we can spread more</p>
            <p className="sentence">Happiness to others</p>

            <div className="home_login-buttons home_1_login_buttons">
              <button className="home_1_button1 home_btn">Watch Stories</button>
              <button className="home_1_button2 home_btn">Our Activity</button>
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
        <div className="home_1_container_right">
          <div className="how_1_container_right_img">
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
            </div> 
           </div> 
        </div>
      </div>
    </div>
  );
}
