import "./App.css";
import React from "react";

import Home_1 from "./component/Home_1";
import Home_2 from "./component/Home_2";
import Home_3 from "./component/Home_3";
import Home_4 from "./component/Home_4";
import Home_5 from "./component/Home_5";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import Navbar from"./component/Navbar"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/Home" element={<><Home_1 /><Home_2 /><Home_3 /><Home_4 /><Home_5 /></>} />
          <Route path="/Login" element={<><Login/></>}></Route>


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
