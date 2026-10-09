import { useSyncExternalStore } from "react";

const QUERY = "(min-width: 768px)";

function subscribe(callback: () => void) {
  const media = window.matchMedia(QUERY);
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}

/** 3 items visible on desktop, 1 on mobile (1 during SSR). */
export function useVisibleCount(): number {
  return useSyncExternalStore(
    subscribe,
    () => (window.matchMedia(QUERY).matches ? 3 : 1),
    () => 1,
  );
}
