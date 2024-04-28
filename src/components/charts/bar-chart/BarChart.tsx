"use client";

import moment from "moment";
import { Bar } from "./Bar";
import { store } from "@/src/store";
import { useInitialLoad } from "@/src/hooks";
import { useStore } from "@rahulrawat03/mustate";

function getFinanceData() {
  const date = new Date();
  let currentMoment = moment(date).subtract(6, "day");

  const earnings = [];
  const expenses = [];

  for (let i = 0; i < 7; i++) {
    let daysEarning = 0;
    for (const earning of store.earnings) {
      if (currentMoment.isSame(earning.date, "date")) {
        daysEarning += earning.amount;
      }
    }
    earnings.push(daysEarning);

    let daysExpense = 0;
    for (const expense of store.expenses) {
      if (currentMoment.isSame(expense.date, "date")) {
        daysExpense += expense.amount;
      }
    }
    expenses.push(daysExpense);

    currentMoment = currentMoment.add(1, "day");
  }

  return { earnings, expenses };
}

const MAX_BAR_SIZE = 64;

export function BarChart() {
  useStore([
    {
      store: store,
      include: ["transactions"],
    },
  ]);

  useInitialLoad();

  const { earnings, expenses } = getFinanceData();
  const numberOfBars = Math.max(earnings.length, expenses.length);

  let totalSavings = earnings.reduce((sum, earning) => sum + earning, 0);
  totalSavings = expenses.reduce(
    (sum, negative) => sum - negative,
    totalSavings
  );

  const normalizationFactor = normalize(earnings, expenses);

  return (
    <div className="w-80 h-fit bg-secondary-surface px-10 py-4 rounded-xl my-4 mx-auto md:mx-4">
      <h3 className="text-on-secondary-surface font-semibold -translate-x-4">
        {"Total Savings "}
        <strong className="font-bold text-primary">${totalSavings}</strong>
      </h3>
      <span className="text-xs -translate-x-4 block">(Past 7 days)</span>
      <div className="flex w-full h-32 md:h-40 justify-between items-center">
        {Array(numberOfBars)
          .fill(0)
          .map((_, index) => (
            <Bar
              key={index}
              positive={earnings[index] ?? 0}
              negative={expenses[index] ?? 0}
              normalizationFactor={normalizationFactor}
            />
          ))}
      </div>
    </div>
  );
}

function normalize(earnings: number[], expenses: number[]) {
  let max = earnings[0];

  for (const value of earnings) {
    max = Math.max(max, value);
  }
  for (const value of expenses) {
    max = Math.max(max, value);
  }

  let normalizationFactor = MAX_BAR_SIZE / max;

  for (let i = 0; i < earnings.length; i++) {
    earnings[i] *= normalizationFactor;
  }
  for (let i = 0; i < expenses.length; i++) {
    expenses[i] *= normalizationFactor;
  }

  return normalizationFactor;
}
