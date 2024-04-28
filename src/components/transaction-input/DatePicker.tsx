"use client";

import { useMemo } from "react";
import Select from "react-select";
import {
  days,
  isValidDay,
  isValidMonth,
  isValidYear,
  months,
  years,
} from "@/src/utils";
import { useStore } from "@rahulrawat03/mustate";
import { store } from "@/src/store";

export function DatePicker() {
  useStore([
    {
      store: store,
      include: ["currentDate"],
    },
  ]);

  const handleChange = (
    value: string,
    validate: (value: string) => boolean,
    update: (value: string) => void
  ) => {
    if (!value) {
      return;
    }

    if (validate(value)) {
      update(value);
    }
  };

  const handleDayChange = (value: string) => {
    handleChange(
      value,
      (day) => isValidDay(day, store.currentDate.month, store.currentDate.year),
      (day) =>
        (store.currentDate = {
          day,
          month: store.currentDate.month,
          year: store.currentDate.year,
        })
    );
  };

  const handleMonthChange = (value: string) => {
    handleChange(
      value,
      (month) =>
        isValidMonth(store.currentDate.day, month, store.currentDate.year),
      (month) =>
        (store.currentDate = {
          day: store.currentDate.day,
          month,
          year: store.currentDate.year,
        })
    );
  };

  const handleYearChange = (value: string) => {
    handleChange(
      value,
      (year) =>
        isValidYear(store.currentDate.day, store.currentDate.month, year),
      (year) =>
        (store.currentDate = {
          day: store.currentDate.day,
          month: store.currentDate.month,
          year,
        })
    );
  };

  const dayOptions = useMemo(
    () =>
      days.map((day) => ({
        value: day.toString(),
        label: day,
      })),
    []
  );

  const monthOptions = useMemo(
    () =>
      months.map((month) => ({
        value: month,
        label: `${month[0].toUpperCase()}${month.slice(1)}`,
      })),
    []
  );

  const yearOptions = useMemo(
    () =>
      years.map((year) => ({
        value: year.toString(),
        label: year,
      })),
    []
  );

  return (
    <div className="flex text-on-secondary-surface mb-2">
      <Select
        onChange={(target) => handleDayChange(target?.value ?? "")}
        options={dayOptions}
        value={dayOptions.find((day) => day.value === store.currentDate.day)}
      />
      <Select
        onChange={(target) => handleMonthChange(target?.value ?? "")}
        options={monthOptions}
        value={monthOptions.find(
          (month) => month.value === store.currentDate.month
        )}
        className="mx-2"
      />
      <Select
        onChange={(target) => handleYearChange(target?.value ?? "")}
        options={yearOptions}
        value={yearOptions.find(
          (year) => year.value === store.currentDate.year
        )}
      />
    </div>
  );
}
