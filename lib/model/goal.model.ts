import mongoose from "mongoose";

const goalSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    targetAmount: {
      type: Number,
      required: true,
    },
    currentAmount: {
      type: Number,
      default: 0,
    },
    dueDate: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

const GoalRecord = mongoose.models.Goal || mongoose.model("Goal", goalSchema);
export default GoalRecord;
