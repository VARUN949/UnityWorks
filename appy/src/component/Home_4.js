import React from "react";
import background_2 from "../images/background-2.jpg";
import background_1 from "../images/background-1.jpg";
import background_3 from "../images/background-3.jpg";
import background from "../images/background.png";

export default function Home_4() {
  return (
    <div>
      <div className="Home_4_container">
        <div className="Home_4_event">
          <div className="Home_4_event_name">
            <p>Event</p>
          </div>
          <div className="Home_4_line"></div>
        </div>
        <div className="Home_4_event_template">
          {/* <div className="Home_4_two_template"> */}
          <div className="abc">
            <div className="Home_4_template">
              <img src={background} alt="" />
              <div>
                <p>20-2-2023 ahmedabad</p>
                <p>Lorem ipsum dolor sitkkf adipisi elit</p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam,
                  quam!Lorem ipsum dolor sit, amet consectetur adipisicing
                </p>
                <p>Read more</p>
              </div>
            </div>
            <div className="Home_4_template">
              <img src={background_1} alt="" />
              <div>
                <p>20-2-2023 ahmedabad</p>
                <p>Lorem ipsum dolor sitkkf adipisi elit</p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam,
                  quam!Lorem ipsum dolor sit, amet consectetur adipisicing
                </p>
                <p>Read more</p>
              </div>
            </div>
          </div>
          <div className="abc">
            <div className="Home_4_template">
              <img src={background_2} alt="" />
              <div>
                <p>20-2-2023 ahmedabad</p>
                <p>Lorem ipsum dolor sitkkf adipisi elit</p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam,
                  quam!Lorem ipsum dolor sit, amet consectetur adipisicing
                </p>
                <p>Read more</p>
              </div>
            </div>
            <div className="Home_4_template">
              <img src={background_3} alt="" />
              <div>
                <p>20-2-2023 ahmedabad</p>
                <p>Lorem ipsum dolor sitkkf adipisi elit</p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam,
                  quam!Lorem ipsum dolor sit, amet consectetur adipisicing
                </p>
                <p>Read more</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
