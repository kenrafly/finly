"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Pencil, Trash2 } from "lucide-react";

interface Transaction {
  _id: string;
  title: string;
  type: "income" | "expense";
  amount: number;
  date: string;
}

interface RecentTransactionsProps {
  transactions: Transaction[];
  onEdit: (transaction: Transaction) => void;
  onDelete: (id: string) => void;
}

const RecentTransactions: React.FC<RecentTransactionsProps> = ({
  transactions,
  onEdit,
  onDelete,
}) => {
  return (
    <Table className="w-full border rounded-xl shadow-md bg-white">
      <TableCaption className="text-sm text-gray-500">
        A list of your recent transactions.
      </TableCaption>
      <TableHeader>
        <TableRow className="bg-[#F9FAFB]">
          <TableHead className="font-semibold">Title</TableHead>
          <TableHead className="font-semibold">Type</TableHead>
          <TableHead className="font-semibold">Date</TableHead>
          <TableHead className="text-right font-semibold">Amount</TableHead>
          <TableHead className="text-center font-semibold">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((tx) => (
          <TableRow key={tx._id} className="hover:bg-gray-50">
            <TableCell className="font-medium">{tx.title}</TableCell>
            <TableCell>{tx.type}</TableCell>
            <TableCell>{new Date(tx.date).toLocaleDateString()}</TableCell>
            <TableCell className="text-right">
              ${tx.amount.toFixed(2)}
            </TableCell>
            <TableCell className="text-center space-x-2">
              <button onClick={() => onEdit(tx)}>
                <Pencil
                  size={16}
                  className="text-blue-500 hover:text-blue-700"
                />
              </button>
              <button onClick={() => onDelete(tx._id)}>
                <Trash2 size={16} className="text-red-500 hover:text-red-700" />
              </button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default RecentTransactions;
