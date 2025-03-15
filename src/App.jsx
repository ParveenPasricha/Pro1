import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Login from "./Components/Login";
import Series from "./Components/Series";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/Login" element={<Login/>}>
          </Route>
            <Route path="/series" element={<Series/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
