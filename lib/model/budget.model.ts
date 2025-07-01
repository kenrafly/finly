import mongoose from "mongoose";

const budgetSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    limit: {
      type: Number,
      required: true,
    },
    currentAmount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const BudgetRecord =
  mongoose.models.Budget || mongoose.model("Budget", budgetSchema);
export default BudgetRecord;
