import React, { useContext, useState, useEffect } from "react";

const AppContext = React.createContext();
const Provider = ({ children }) => {
  const [step, setStep] = useState("/");
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    planType: "",
    planPricing: "mo",
    addOns: "",
  });

  // Update step after every relode
  useEffect(() => {
    const page = window.location.pathname.replace("/step", "");
    setStep(page);
  }, [window.location.pathname]);

  // step 1 : Validate form
  const validateForm = (e) => {
    e.preventDefault();

    const inputControls = [...e.currentTarget.children].splice(0, 3);

    inputControls.forEach((e) => {
      const input = e.children[1];

      if (!input.value) {
        onError(input.parentElement);
      }
    });

    const InputValueCheck = inputControls.every(
      (e) => e.children[1].value !== ""
    );

    if (InputValueCheck) {
      setStep("2");
    }
    return InputValueCheck;
  };

  // error
  const onError = (element) => {
    element.classList.add("error");
    setTimeout(() => {
      element.classList.remove("error");
    }, 2500);
  };

  // step 2
  const changePlanType = (e) => {
    const parent = e.currentTarget.parentElement;
    const children = [...parent.children];
    const choosenPlan = e.currentTarget;

    children.forEach((element) => {
      element.classList.remove("clicked");
    });

    choosenPlan.classList.add("clicked");

    setData((prevData) => {
      prevData.planType = choosenPlan.dataset.plan;
      return prevData;
    });
  };

  const pricing = (e) => {
    const Prices = document.querySelectorAll("#price");

    if (data.planPricing === "mo") {
      setData({ ...data, planPricing: "yr" });

      [...Prices].forEach((e) => (e.textContent = e.textContent * 10));

      e.currentTarget.classList.add("toggleClicked");
    } else {
      setData({ ...data, planPricing: "mo" });

      [...Prices].forEach((e) => (e.textContent = e.textContent / 10));

      e.currentTarget.classList.remove("toggleClicked");
    }
  };

  // step 3
  const add_ons = (e) => {
    const element = e.currentTarget;

    if (element.classList.contains("serviceClicked")) {
      element.classList.remove("serviceClicked");
      setData((prevData) => {
        prevData.addOns = prevData.addOns.replace(
          element.dataset.name + ",",
          ""
        );
        return prevData;
      });
    } else {
      element.classList.add("serviceClicked");
      setData((prevData) => {
        if (!prevData.addOns.match(element.dataset.name)) {
          prevData.addOns += element.dataset.name + ",";
        }
        return prevData;
      });
    }
  };

  // step 4
  const myAddOnsPrices = {
    Online_service: 1,
    Larger_storage: 2,
    Customizable_Profile: 2,
  };

  const palnsPricing = {
    Arcade: 9,
    Advanced: 12,
    Pro: 15,
  };

  return (
    <AppContext.Provider
      value={{
        step,
        setStep,
        validateForm,
        data,
        setData,
        changePlanType,
        pricing,
        add_ons,
        myAddOnsPrices,
        palnsPricing,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobally = () => useContext(AppContext);

export default Provider;
