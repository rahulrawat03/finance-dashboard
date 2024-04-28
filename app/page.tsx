import { BarChart, Card, TransactionList } from "@/src/components";
import { TransactionType } from "@/src/types";

export default function Home() {
  const positives = [1, 4, 2, 7, 8, 9, 15];
  const negatives = [3, 2, 4, 3, 1, 7, 14];

  return (
    <div className="flex flex-col md:flex-row md:grow">
      <div>
        <BarChart positives={positives} negatives={negatives} />
        <Card transactionType={TransactionType.earning} />
        <Card transactionType={TransactionType.expense} />
      </div>
      <div className="flex flex-col mt-4 mx-4 md:grow md:h-4/5 md:overflow-scroll">
        <h2 className="text-lg text-on-primary-surface ml-4 font-semibold">
          Transactions
        </h2>
        <TransactionList transactionType={TransactionType.all} />
      </div>
    </div>
  );
}
