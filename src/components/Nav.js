import React from "react";
import { useGlobally } from "../useContext";

const Nav = () => {
  const { step } = useGlobally();

  return (
    <div className="navContainer">
      <ul className="nav">
        <li>
          <p className={`num ${step === "/" && "clicked"}`}>1</p>
          <span>
            <p>STEP 1</p>
            <p>YOUR INFO</p>
          </span>
        </li>

        <li>
          <p className={`num ${step === "2" && "clicked"}`}>2</p>
          <span>
            <p>STEP 2</p>
            <p>SELECT PLAN</p>
          </span>
        </li>

        <li>
          <p className={`num ${step === "3" && "clicked"}`}>3</p>
          <span>
            <p>STEP 3</p>
            <p>ADD-ONS</p>
          </span>
        </li>

        <li>
          <p className={`num ${step === "4" && "clicked"}`}>4</p>
          <span>
            <p>STEP 4</p>
            <p>SUMMARY</p>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
