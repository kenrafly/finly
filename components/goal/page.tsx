"use client";

import React, { useState } from "react";
import { useUser } from "@clerk/nextjs";

const GoalPage = ({
  show,
}: {
  show: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { user } = useUser();

  const [formState, setFormState] = useState({
    title: "",
    targetAmount: "",
    currentAmount: "",
    dueDate: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user?.id) {
      return setMessage("You must be logged in to add a goal.");
    }

    setIsSubmitting(true);
    setMessage("");

    try {
      const res = await fetch("/api/goal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: user.id,
          title: formState.title,
          targetAmount: parseFloat(formState.targetAmount),
          currentAmount: parseFloat(formState.currentAmount),
          dueDate: new Date(formState.dueDate),
        }),
      });

      if (!res.ok) throw new Error("Failed to submit goal");

      setMessage("✅ Goal submitted successfully!");
      setFormState({
        title: "",
        targetAmount: "",
        currentAmount: "",
        dueDate: "",
      });
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to submit goal.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-40 backdrop-blur-xs flex items-center justify-center">
      <div className="bg-[#0B1D51] p-8 shadow-lg text-center h-full rounded-2xl w-1/3 border border-[#FFE3A9]">
        <h1 className="text-2xl text-[#FFE3A9] mb-6">GOAL</h1>
        <button
          className="absolute top-4 right-4 text-white"
          onClick={() => show(false)}
        >
          Close
        </button>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-start">
            <label>Title:</label>
            <input
              type="text"
              name="title"
              required
              value={formState.title}
              onChange={handleChange}
              className="p-2 rounded-md w-full border border-[#FFE3A9] mb-4 text-white"
              placeholder="Enter title"
            />
          </div>

          <div className="flex flex-col items-start">
            <label>Target Amount:</label>
            <input
              type="number"
              name="targetAmount"
              required
              value={formState.targetAmount}
              onChange={handleChange}
              className="p-2 rounded-md w-full border border-[#FFE3A9] mb-4 text-white"
              placeholder="Enter target amount"
            />
          </div>

          <div className="flex flex-col items-start">
            <label>Current Amount:</label>
            <input
              type="number"
              name="currentAmount"
              value={formState.currentAmount}
              onChange={handleChange}
              className="p-2 rounded-md w-full border border-[#FFE3A9] mb-4 text-white"
              placeholder="Enter current amount"
            />
          </div>

          <div className="flex flex-col items-start">
            <label>Due Date:</label>
            <input
              type="date"
              name="dueDate"
              required
              value={formState.dueDate}
              onChange={handleChange}
              className="p-2 rounded-md w-full border border-[#FFE3A9] mb-4 text-white"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#FFE3A9] text-[#0B1D51] p-2 rounded-md w-full hover:bg-[#3772FF] hover:text-white transition-colors duration-300"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>

          {message && <p className="mt-4 text-sm text-[#FFE3A9]">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default GoalPage;
