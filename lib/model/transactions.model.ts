import mongoose from "mongoose";
const transactionSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      enum: ["expense", "income"],
      required: true,
    },

    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const TransactionRecord =
  mongoose.models.Transaction ||
  mongoose.model("Transaction", transactionSchema);
export default TransactionRecord;
