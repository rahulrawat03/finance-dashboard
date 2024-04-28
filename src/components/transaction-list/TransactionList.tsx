"use client";

import { store } from "@/src/store";
import { useStore } from "@rahulrawat03/mustate";
import { TransactionItem } from "./TransactionItem";
import { Transaction, TransactionType } from "@/src/types";
import { useInitialLoad } from "@/src/hooks";

interface TransactionListProps {
  transactionType: TransactionType;
}

export function TransactionList({
  transactionType,
}: Readonly<TransactionListProps>) {
  useStore([
    {
      store: store,
      include: ["transactions"],
    },
  ]);

  useInitialLoad();

  let transactions: Transaction[];
  switch (transactionType) {
    case TransactionType.earning:
      transactions = store.earnings;
      break;
    case TransactionType.expense:
      transactions = store.expenses;
      break;
    default:
      transactions = store.transactions;
  }

  return (
    <div className="md:w-full">
      {transactions.map((transaction) => (
        <TransactionItem key={transaction.id} {...transaction} />
      ))}
    </div>
  );
}
