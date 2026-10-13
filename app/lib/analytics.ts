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

export function trackContact(source: string) {
  if (typeof window === "undefined") return;
  const utms = getUtms();
  window.fbq?.("track", "Contact", { content_name: source, ...utms });
  window.gtag?.("event", "generate_lead", { button_source: source, ...utms });
  window.clarity?.("event", `whatsapp_click_${source}`);
}

export function revokeTracking() {
  window.fbq?.("consent", "revoke");
  window.gtag?.("consent", "update", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  window.clarity?.("consent", false);
}
