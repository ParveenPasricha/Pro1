import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Login from "./Components/Login";
import Series from "./Components/Series";
import TestSeries from "./Components/OnlineTest";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<Login/>}>
          </Route>
            <Route path="/series" element={<Series/>}/>
            <Route path="/testseries" element={<TestSeries/>}/>
          </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
