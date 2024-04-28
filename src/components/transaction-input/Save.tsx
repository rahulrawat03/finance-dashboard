"use client";

import { store } from "@/src/store";
import { TransactionType } from "@/src/types";

interface SaveProps {
  transactionType: TransactionType;
}

export function Save({ transactionType }: Readonly<SaveProps>) {
  return (
    <button
      className="bg-tertiary text-on-primary px-4 py-2 uppercase outline-none border-none rounded-md  md:mr-4"
      onClick={() => store.add(transactionType)}
    >
      Save
    </button>
  );
}
