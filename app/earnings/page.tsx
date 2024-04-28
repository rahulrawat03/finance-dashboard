import { TransactionInput, TransactionList } from "@/src/components";
import { TransactionType } from "@/src/types";

export default function Earning() {
  return (
    <div className="flex flex-col md:w-4/5">
      <TransactionInput transactionType={TransactionType.earning} />
      <TransactionList transactionType={TransactionType.earning} />
    </div>
  );
}
