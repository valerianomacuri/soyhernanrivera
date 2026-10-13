import { getUtms } from "@/app/lib/utm";

// Returns the ID if it matches the expected format, otherwise "" (not configured).
// Placeholders like "[META_PIXEL_ID]" never match, so their scripts are skipped.
function readId(value: string | undefined, pattern: RegExp): string {
  const trimmed = (value ?? "").trim().replace(/^\[(.*)\]$/, "$1");
  return pattern.test(trimmed) ? trimmed : "";
}

export const META_PIXEL_ID = readId(process.env.NEXT_PUBLIC_META_PIXEL_ID, /^\d{10,20}$/);
export const GA4_MEASUREMENT_ID = readId(
  process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID,
  /^G-[A-Z0-9]+$/,
);
export const CLARITY_PROJECT_ID = readId(
  process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID,
  /^[a-z0-9]+$/i,
);

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

export function isConfigured(id: string) {
  return id !== "";
}

// Trackers can be missing, blocked, or replaced by extensions; one failing
// must never break the click handler or the other trackers.
function call(name: "fbq" | "gtag" | "clarity", ...args: unknown[]) {
  try {
    const fn = window[name];
    if (typeof fn === "function") fn(...args);
  } catch {
    // ignore tracker failures
  }
}

export function trackContact(source: string) {
  if (typeof window === "undefined") return;
  const utms = getUtms();
  call("fbq", "track", "Contact", { content_name: source, ...utms });
  call("gtag", "event", "generate_lead", { button_source: source, ...utms });
  call("clarity", "event", `whatsapp_click_${source}`);
}

export function revokeTracking() {
  call("fbq", "consent", "revoke");
  call("gtag", "consent", "update", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  call("clarity", "consent", false);
}
