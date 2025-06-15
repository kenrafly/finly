import React from "react";

const CallToActionForm = () => {
  return (
    <div className="bg-[#3772FF] p-6 rounded-lg shadow-lg w-full max-w-md">
      <form action="">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-2 rounded border border-gray-300 w-full mb-4"
        />
        <textarea
          placeholder="Your suggestion"
          rows={4}
          className="p-2 rounded border border-gray-300 w-full mb-4"
        />
        <button
          type="submit"
          className="bg-[#FFE3A9] text-[#0B1D51] py-2 px-4 rounded"
        >
          Submit Suggestion
        </button>
      </form>
    </div>
  );
};

export default CallToActionForm;
