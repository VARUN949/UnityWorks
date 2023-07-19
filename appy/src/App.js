import "./App.css";
import React from "react";
import { useEffect } from "react";
import Home1 from "./component/Home_1";
import Home2 from "./component/Home_2";
import Home3 from "./component/Home_3";
import Home4 from "./component/Home_4";
import Home5 from "./component/Home_5";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import Navbar from "./component/Navbar"


function App() {
  
  useEffect(() => {
    // console.log(window.location.pathname)
   
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<><Home1 /><Home2/><Home3 /><Home4 /><Home5 /></>} />
          <Route path="/Login" element={<><Login/></>}></Route>


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
