import React from "react";
import { useGlobally } from "../useContext";
import { useNavigate } from "react-router-dom";
// css
import "../styles/stepOne.css";

const StepOne = () => {
  const { validateForm, data, setData } = useGlobally();
  const navigate = useNavigate();

  return (
    <section className="stepContainer">
      <h1>Personal info</h1>
      <p>Please provide your name, email address, and phone number.</p>

      <form
        onSubmit={(e) => {
          validateForm(e) && navigate("/step2");
        }}
        noValidate
      >
        <div className="nameInput">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="e.g. Yassin Yahyawi"
            autoComplete="nope"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.currentTarget.value })}
          />
          <p className="errorMessage">This field is required!</p>
        </div>

        <div className="emailInput">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="e.g. yassinyahyawi99@gmail.com"
            autoComplete="nope"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.currentTarget.value })}
          />
          <p className="errorMessage">This field is required!</p>
        </div>

        <div className="phoneInput">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            name="phone"
            placeholder="e.g. +1 234 567 890"
            autoComplete="nope"
            value={data.phone}
            onChange={(e) => setData({ ...data, phone: e.currentTarget.value })}
          />
          <p className="errorMessage">This field is required!</p>
        </div>

        <button className="nextBtn">Next Step</button>
      </form>
    </section>
  );
};

export default StepOne;
