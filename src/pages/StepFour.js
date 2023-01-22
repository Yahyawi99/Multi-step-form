import React from "react";
import { useGlobally } from "../useContext";
import { Link, useNavigate } from "react-router-dom";
// css
import "../styles/stepFour.css";

const StepFour = () => {
  const { data, myAddOnsPrices, palnsPricing, setStep } = useGlobally();
  const navigate = useNavigate();

  const myAddOns = data.addOns.split(",").filter((e) => e);

  let total = palnsPricing[data.planType];
  myAddOns.forEach((e) => (total += myAddOnsPrices[e.replace(" ", "_")]));

  return (
    <section className="stepContainer">
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming.</p>

      <div className="info">
        <div>
          <div>
            <span>
              <p>
                {data.planType +
                  " " +
                  (data.planPricing === "mo" ? "(Monthly)" : "(Yearly)")}
              </p>
              <Link to="/step2" onClick={() => setStep("2")}>
                change
              </Link>
            </span>
            <p>
              $
              <span id="price">
                {data.planPricing === "mo"
                  ? palnsPricing[data.planType]
                  : palnsPricing[data.planType] * 10}
              </span>
              /{data.planPricing}
            </p>
          </div>

          <div>
            {myAddOns.map((e, i) => {
              return (
                <div id="add_on" key={i}>
                  <p>{e}</p>
                  <p>
                    +$
                    <span id="price">
                      {data.planPricing === "mo"
                        ? myAddOnsPrices[e.replace(" ", "_")]
                        : myAddOnsPrices[e.replace(" ", "_")] * 10}
                    </span>
                    /{data.planPricing}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <p>
            Total {data.planPricing === "mo" ? "(per month)" : "(per year)"}
          </p>
          <p>
            +$
            <span id="price">
              {data.planPricing === "mo" ? total : total * 10}
            </span>
            /{data.planPricing}
          </p>
        </div>
      </div>

      <div className="btns">
        <Link to="/step3">
          <button className="backBtn">Go Back</button>
        </Link>

        <button
          className="nextBtn"
          onClick={() => {
            navigate("/thankYou");
          }}
        >
          Next Step
        </button>
      </div>
    </section>
  );
};

export default StepFour;
