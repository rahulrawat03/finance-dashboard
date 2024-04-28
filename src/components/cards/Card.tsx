"use client";

import Link from "next/link";
import { ChevronRight } from "react-feather";
import { useInitialLoad } from "@/src/hooks";
import { store } from "@/src/store";
import { TransactionType } from "@/src/types";
import { useStore } from "@rahulrawat03/mustate";

interface CardProps {
  transactionType: TransactionType;
}

export function Card({ transactionType }: Readonly<CardProps>) {
  useStore([
    {
      store: store,
      include: ["transactions"],
    },
  ]);

  useInitialLoad();

  const title =
    transactionType === TransactionType.earning ? "Earnings" : "Expenses";
  const amount = (
    transactionType === TransactionType.earning
      ? store.earnings
      : store.expenses
  ).reduce((sum, current) => sum + current.amount, 0);
  const url =
    transactionType === TransactionType.earning ? "/earnings" : "/expenses";

  return (
    <Link
      href={url}
      className="flex flex-col bg-secondary-surface m-6 rounded-xl p-4"
    >
      <h3 className="text-lg text-on-secondary-surface font-semibold">
        {title}
      </h3>
      <strong className="text-3xl text-primary font-bold flex justify-between">
        ${amount}
        <ChevronRight />
      </strong>
    </Link>
  );
}
