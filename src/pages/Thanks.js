import React from "react";
// css
import "../styles/thanks.css";

const Thanks = () => {
  return (
    <section className="stepContainer">
      <img src="/assets/images/icon-thank-you.svg" alt="checkmark" />
      <h1>Thank you!</h1>
      <p className="paragraph">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </section>
  );
};

export default Thanks;
