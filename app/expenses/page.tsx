import { TransactionInput, TransactionList } from "@/src/components";
import { TransactionType } from "@/src/types";

export default function Expense() {
  return (
    <div className="flex flex-col md:w-4/5">
      <TransactionInput transactionType={TransactionType.expense} />
      <TransactionList transactionType={TransactionType.expense} />
    </div>
  );
}
