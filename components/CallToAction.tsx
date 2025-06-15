import React from "react";
import CallToActionForm from "./CallToActionForm";

const CallToAction = () => {
  return (
    <section className="bg-[#0B1D51] flex flex-col md:flex-row text-white md:px-17 p-7 items-center justify-between min-h-screen">
      <div className="flex items-center justify-center w-full ">
        <h1 className="text-6xl text-[#FFE3A9] mb-8">
          THERE&apos;S NO NEED TO HESITATE, TRY AND FEEL THE BENEFIT OF{" "}
          <span className="text-[#3772FF]">TRACKING YOUR OWN FINANCIAL</span>
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-5 text-[#FFE3A9]">
        <h1 className="text-3xl ">Suggestion</h1>
        <CallToActionForm />
      </div>
    </section>
  );
};

export default CallToAction;
