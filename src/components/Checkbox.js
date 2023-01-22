import React from "react";
// css
import "../styles/checkbox.css";

const Checkbox = () => {
  return (
    <section className="checkbox">
      <i>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="9"
          viewBox="0 0 12 9"
        >
          <path
            fill="none"
            stroke="#FFF"
            strokeWidth="2"
            d="m1 4 3.433 3.433L10.866 1"
          />
        </svg>
      </i>
    </section>
  );
};

export default Checkbox;
