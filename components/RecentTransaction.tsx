import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const RecentTransactions = () => {
  return (
    <Table className="w-full border rounded-xl shadow-md bg-white">
      <TableCaption className="text-sm text-gray-500">
        A list of your recent transactions.
      </TableCaption>
      <TableHeader>
        <TableRow className="bg-[#F9FAFB]">
          <TableHead className="w-[100px] font-semibold">Invoice</TableHead>
          <TableHead className="font-semibold">Status</TableHead>
          <TableHead className="font-semibold">Method</TableHead>
          <TableHead className="text-right font-semibold">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow className="hover:bg-gray-50">
          <TableCell className="font-medium">INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
        {/* Add more TableRow entries here */}
      </TableBody>
    </Table>
  );
};

export default RecentTransactions;
