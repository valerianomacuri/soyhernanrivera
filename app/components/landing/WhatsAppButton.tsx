"use client";

import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/app/lib/whatsapp";
import { trackContact } from "@/app/lib/analytics";

export function WhatsAppButton({
  label,
  source,
  className = "",
  variant = "solid",
}: {
  label: string;
  source: string;
  className?: string;
  variant?: "solid" | "outline";
}) {
  const variantClasses =
    variant === "solid"
      ? "bg-gold text-ink hover:bg-gold/90"
      : "border border-gold text-gold hover:bg-gold/10";

  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackContact(source)}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-display uppercase tracking-wide text-sm transition-colors ${variantClasses} ${className}`}
    >
      <MessageCircle className="h-4 w-4" />
      {label}
    </a>
  );
}
