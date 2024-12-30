import { React, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Home from "./Pages/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
