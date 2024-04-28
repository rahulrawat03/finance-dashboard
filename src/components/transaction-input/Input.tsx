"use client";

import { store } from "@/src/store";
import { useStore } from "@rahulrawat03/mustate";

interface InputProps {
  type: "title" | "amount";
  placeholder: string;
}

export function Input({ type, placeholder }: Readonly<InputProps>) {
  useStore([
    {
      store: store,
      include: ["title"],
    },
  ]);

  const handleChange = (value: string) => {
    if (type === "title") {
      store.title = value;
    } else {
      try {
        store.amount = parseInt(value);
      } catch (ex: unknown) {
        store.amount = 0;
      }
    }
  };

  return (
    <input
      type={type === "title" ? "text" : "number"}
      className="text-md outline-none bg-secondary-surface text-on-secondary-surface h-10 mb-2 px-2 rounded-md md:mr-4"
      onChange={(event) => handleChange(event.target.value ?? "")}
      placeholder={placeholder}
    />
  );
}
