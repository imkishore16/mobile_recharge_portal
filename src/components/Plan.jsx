const Plan = (plan) => {
  return (
    <div className="flex flex-row justify-between h-[200px] w-[500px] bg-gray-700 rounded-[20px] my-4 mx-4">
      <div className="flex flex-col flex-grow ">
        <div className=" bg-white rounded-[5px] mx-10 my-2 text-center ">
          <h1>PREPAID</h1>
        </div>
        <div className="flex flex-row flex-grow">
          <div className="bg-white mx-3 my-3 w-[66%] rounded-[20px] text-center items-center justify-around flex flex-col">
            <h2>Data : {plan.data}GB</h2>
            <h2>Speed{plan.speed}MBPS</h2>
            <h2>Note{plan.note}</h2>
            <h2>Offer</h2>
          </div>

          <div className="bg-white mx-3 my-3 w-[33%] rounded-[20px] text-center justify-around flex flex-col">
            <h1>Validity{plan.validity}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
