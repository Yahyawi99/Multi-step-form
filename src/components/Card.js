import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// components
import Nav from "./Nav";
// pages
import StepOne from "../pages/StepOne";
import StepTwo from "../pages/StepTwo";
import StepThree from "../pages/StepThree";
import StepFour from "../pages/StepFour";
import Thanks from "../pages/Thanks";
// styles
import "../styles/Card.css";

const Card = () => {
  return (
    <BrowserRouter>
      <section className="cardContainer">
        <Nav />

        <div className="main">
          <Routes>
            <Route path="/" element={<StepOne />} />
            <Route path="/step2" element={<StepTwo />} />
            <Route path="/step3" element={<StepThree />} />
            <Route path="/step4" element={<StepFour />} />
            <Route path="/thankYou" element={<Thanks />} />
          </Routes>
        </div>
      </section>
    </BrowserRouter>
  );
};

export default Card;
