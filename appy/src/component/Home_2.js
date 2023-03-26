import React from "react";
import old_man from "../images/old_man.png";
import child from "../images/child.png";
import child2 from "../images/2child.png";
import volunteer from "../images/volunteer.png";
import donate from "../icons/donate_icon.png";
import volunteer_icon from "../icons/volunteer_icon.png";

export default function Home_2() {
  return (
    <div className="home_2_container">
      <div className="Home_2_About_Us">
        <div className="home_2_About_us_inner">
          <p>About Us</p>
          <div className="Home_2_line"></div>
        </div>
      </div>
      <div className="Home_2_left_right">
        <div className="Home_2_left">
          <div className="home_2_left_content">
            <div className="item1">
              <div className="grid1">
                <img src={old_man} alt="" />
              </div>
            </div>
            <div className="item2">
              <div className="grid2">
                <img src={child2} alt="" />
              </div>
            </div>
            <div className="item3">
              <div className="grid3">
                <img src={volunteer} alt="" />
              </div>
            </div>
            <div className="item4">
              <div className="grid4">
                <img src={child} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="Home_2_right">
          <div className="home_2_right_content">
            <p>Helping People In abc abc Need Around abvc afaa The World</p>

            <div>
              <p>
                UnityWorks is a digital platform for collecting donations to be
                distributed to people in need
              </p>
            </div>
            <div>
              <img src={donate} alt="" />
              <div>
                <p className="Home_2_inner_donate">Donate</p>
                <p className="Home_2_inner_content">
                  Providing assistance in the form of money , food and clothing
                  to help others ajfklajfk ajflka kakjfdl ajdf kadnflkna lkdf
                </p>
              </div>
            </div>
            <div>
              <img src={volunteer_icon} alt="" />
              <div>
                <p className="Home_2_inner_donate">Volunteer</p>
                <p className="Home_2_inner_content">
                  Providing assistance in the form of money , food and clothing
                  to help others ajfklajfk ajflka kakjfdl ajdf kadnflkna lkdf
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
