import { useSyncExternalStore } from "react";

// Opt-out model: "unset" is treated as allowed until the user rejects.
// "pending" is only returned on the server / during hydration.
export type ConsentState = "granted" | "denied" | "unset" | "pending";

const STORAGE_KEY = "origen_consent";
const listeners = new Set<() => void>();

function read(): ConsentState {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === "granted" || value === "denied" ? value : "unset";
  } catch {
    return "unset";
  }
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function useConsent(): ConsentState {
  return useSyncExternalStore(subscribe, read, () => "pending");
}

export function setConsent(value: "granted" | "denied") {
  try {
    localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // ignore storage failures
  }
  listeners.forEach((listener) => listener());
}
