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
      <div className="bg-white p-4 rounded-md w-[70%] h-[70%]">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-around flex-row bg-gray-800 h-2/3">
            <div className="bg-black w-2/3 h-full mx-2 my-16 ">
              <h1>dskao</h1>
            </div>
            <div className="bg-black w-1/3 h-full mx-2 my-16">
              <h1>dsl</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  };
  
  return (
  //   <div>
  //   <div className="bg-white">
  //     {isPopupOpen && <Popup onClose={closePopup} />}
  //     <section className="flex items-center justify-center">
  //       <ul className="flex flex-wrap justify-around">
  //         {plans.map((plan, index) => (
  //           <li
  //             key={index}
  //             className="w-1/4 flex justify-center rounded-[20px] my-10 mx-2 bg-black"  
  //           >
  //             <Panel
  //               shaded
  //               bodyFill
  //               bordered
  //               style={{ display: "inline-block", width: 240 }}
  //               className="bordered-[100px]"
  //             >
  //               <img src="https://via.placeholder.com/240x240" height="240" className="my-4 rounded-[10px]" />

  //               <Panel header={plan.planPrice} className="text-center rounded-[20px] bg-white font-bold text-xl">
  //                 <p className="text-center font-bold m-2">
  //                   <small className="text-center">Plan-name: {plan.planName}</small>
  //                 </p>
  //                 <p className="text-center font-bold m-2">
  //                   <small>Validity: {plan.planValidity}</small>
  //                 </p>
  //                 <p className="text-center font-bold m-2">{plan.planType}</p>
  //               </Panel>
  //               <button
  //                 className="w-[100%] bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded my-4 mb-8"
  //                 onClick={() => {
  //                   console.log("first");
  //                   openPopup();
  //                 }}
  //               >
  //                 Try Now !
  //               </button>
  //             </Panel>
  //           </li>
  //         ))}
  //       </ul>
  //     </section>
  //   </div>
  // </div>
    <div className="bg-cover bg-center h-screen bg-white" >
      <div className="bg-[url('src/assets/networks.jpg')] bg-opacity-90 bg-cover" >
        {isPopupOpen && <Popup onClose={closePopup} />}
        <section className="flex items-center justify-center">
          <ul className="flex flex-wrap justify-around">
            {plans.map((plan, index) => (
              <li key={index} className="w-1/4 flex justify-center rounded-[20px] my-10 mx-2 bg-black">
                <Panel
                  shaded
                  bodyFill
                  bordered
                  style={{ display: "inline-block", width: 240 }}
                  className="bordered-[100px]"
                >
                  <img src="https://via.placeholder.com/240x240" height="240" className="my-4 rounded-[10px]" />

                  <Panel header={plan.planPrice} className="text-center rounded-[20px] bg-white font-bold text-xl">
                    <p className="text-center font-bold m-2">
                      <small className="text-center">Plan-name: {plan.planName}</small>
                    </p>
                    <p className="text-center font-bold m-2">
                      <small>Validity: {plan.planValidity}</small>
                    </p>
                    <p className="text-center font-bold m-2">{plan.planType}</p>
                  </Panel>
                  <button
                    className="w-[100%] bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded my-4 mb-8"
                    onClick={() => {
                      console.log("first");
                      openPopup();
                    }}
                  >
                    Try Now!
                  </button>
                </Panel>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Plans;
