export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "[META_PIXEL_ID]";
export const GA4_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID ?? "[GA4_MEASUREMENT_ID]";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackLeadEvent(source: string) {
  if (typeof window === "undefined") return;
  window.fbq?.("track", "Lead", { content_name: source });
  window.gtag?.("event", "generate_lead", {
    event_category: "WhatsApp CTA",
    event_label: source,
  });
}
