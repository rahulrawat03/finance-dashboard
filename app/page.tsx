import { BarChart, Card, TransactionList } from "@/src/components";
import { TransactionType } from "@/src/types";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row md:grow md:h-screen">
      <div>
        <BarChart />
        <Card transactionType={TransactionType.earning} />
        <Card transactionType={TransactionType.expense} />
      </div>
      <div className="flex flex-col mt-4 mx-4 md:grow md:h-4/5 md:overflow-y-scroll md:overflow-x-hidden">
        <h2 className="text-lg text-on-primary-surface ml-4 font-semibold">
          Transactions
        </h2>
        <TransactionList transactionType={TransactionType.all} />
      </div>
    </div>
  );
}
