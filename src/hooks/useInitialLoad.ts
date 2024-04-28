import { useEffect } from "react";
import { store } from "@/src/store";

export function useInitialLoad() {
  useEffect(() => store.loadInitialData(), []);
}
