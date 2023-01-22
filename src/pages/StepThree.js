import React from "react";
import { useGlobally } from "../useContext";
import { useNavigate, Link } from "react-router-dom";
// components
import Checkbox from "../components/Checkbox";
// css
import "../styles/stepThree.css";

const StepThree = () => {
  const { data, add_ons, setStep } = useGlobally();
  const navigate = useNavigate();

  const checkForMatch = (string) => (data.addOns.match(string) ? true : false);

  return (
    <section className="stepContainer">
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>

      <div className="services">
        <div
          className={`${checkForMatch("Online service") && "serviceClicked"}`}
          data-name="Online service"
          onClick={(e) => add_ons(e)}
        >
          <Checkbox />
          <span>
            <p>Online service</p>
            <p>Access to multiplayer games</p>
          </span>
          <p>
            $<span id="price">{data.planPricing === "mo" ? 1 : 1 * 10}</span>/
            {data.planPricing}
          </p>
        </div>

        <div
          className={`${checkForMatch("Larger storage") && "serviceClicked"}`}
          data-name="Larger storage"
          onClick={(e) => add_ons(e)}
        >
          <Checkbox />
          <span>
            <p>Larger storage</p>
            <p>Extra 1TB of cloud save</p>
          </span>
          <p>
            $<span id="price">{data.planPricing === "mo" ? 2 : 2 * 10}</span>/
            {data.planPricing}
          </p>
        </div>

        <div
          className={`${
            checkForMatch("Customizable Profile") && "serviceClicked"
          }`}
          data-name="Customizable Profile"
          onClick={(e) => add_ons(e)}
        >
          <Checkbox />
          <span>
            <p>Customizable Profile</p>
            <p>Custom theme on your profile</p>
          </span>
          <p>
            $<span id="price">{data.planPricing === "mo" ? 2 : 2 * 10}</span>/
            {data.planPricing}
          </p>
        </div>
      </div>

      <div className="btns">
        <Link to="/step2" onClick={() => setStep("2")}>
          <button className="backBtn">Go Back</button>
        </Link>
        <button
          className="nextBtn"
          onClick={() => {
            setStep("4");
            navigate("/step4");
          }}
        >
          Next Step
        </button>
      </div>
    </section>
  );
};

export default StepThree;
