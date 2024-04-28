"use client";

import { formatDate } from "@/src/utils";
import { Delete } from "./Delete";
import { Transaction, TransactionType } from "@/src/types";

export function TransactionItem({
  id,
  title,
  date,
  amount,
  type,
}: Readonly<Transaction>) {
  return (
    <div className="flex justify-between mx-2 rounded-md shadow-md p-2 m-2">
      <div className="flex items-center">
        <strong
          className={`text-lg w-20 mr-4 text-ellipsis overflow-hidden ${
            type === TransactionType.earning ? "text-primary" : "text-tertiary"
          }`}
        >
          ${amount}
        </strong>
        <div className="flex flex-col">
          <strong className="text-lg text-on-primary-surface font-bold tracking-wide">
            {title}
          </strong>
          <span className="text-on-primary-surface text-xs">
            {formatDate(date)}
          </span>
        </div>
      </div>
      <Delete id={id} />
    </div>
  );
}
