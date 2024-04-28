import { TransactionList } from "@/src/components";
import { TransactionType } from "@/src/types";

export default function Transaction() {
  return <TransactionList transactionType={TransactionType.all} />;
}
