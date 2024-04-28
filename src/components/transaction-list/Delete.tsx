"use client";

import { store } from "@/src/store";
import { Trash } from "react-feather";

interface DeleteProps {
  id: number;
}

export function Delete({ id }: Readonly<DeleteProps>) {
  return (
    <button onClick={() => store.delete(id)}>
      <Trash />
    </button>
  );
}
