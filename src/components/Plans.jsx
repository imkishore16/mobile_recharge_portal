import { useState } from "react";
import Navbar from "./Navbar";
// import PlanComponent from "./PlanComponent";
import { Panel } from "rsuite";
const Plans = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };
  const plans = [
    {
      planType: "PREPAID",
      planName: "Some plan",
      planValidity: "10 days",
      planDetails: "You have to pay",
      planPrice: "10 RS",
    },
    {
      planType: "PREPAID",
      planName: "Some plan",
      planValidity: "10 days",
      planDetails: "You have to pay",
      planPrice: "10 RS",
    },
    {
      planType: "PREPAID",
      planName: "Some plan",
      planValidity: "10 days",
      planDetails: "You have to pay",
      planPrice: "10 RS",
    },
    {
      planType: "PREPAID",
      planName: "Some plan",
      planValidity: "10 days",
      planDetails: "You have to pay",
      planPrice: "10 RS",
    },
  ];
  const Popup = ({ onClose }) => {
    return (
      <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-4 rounded-md">
          <p>This is a popup content.</p>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    );
  };
  const PlanComponent = (plan) => (
    <Panel
      shaded
      bodyFill
      // bordered
      style={{ display: "inline-block", width: 240 }}
      // className="bordered-[100px] "
    >
      <img src="https://via.placeholder.com/240x240" height="240" />

      <Panel header={plan.planPrice} className="text-center bordered-[310px]">
        <p className="text-center">
          <small className="text-center">Plan-name: {plan.planName}</small>
        </p>
        <p className="text-center">
          <small>Validity: {plan.planValidity}</small>
        </p>
        <p className="text-center">
          <small>Plan-Details: {plan.planDetails}</small>
        </p>
        <p className="text-center">{plan.planType}</p>
      </Panel>
      <button
        className="w-[100%] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          console.log("first");
          openPopup;
        }}
      >
        Try Now !
      </button>
    </Panel>
  );

  return (
    <div>
      {isPopupOpen && <Popup onClose={closePopup} />}
      <section>
        <ul className="flex flex-wrap">
          {plans.map((plan, index) => (
            <li
              key={index}
              className="py-4 pr-4 w-1/4 flex justify-around bordered-[200px]"
            >
              <PlanComponent
                {...plan}
                // onClick={() => handleClick(plan)}
                className="bordered-[200px]"
              />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Plans;
