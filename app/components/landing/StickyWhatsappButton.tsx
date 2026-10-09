import { WhatsAppButton } from "@/app/components/landing/WhatsAppButton";

export function StickyWhatsappButton() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-gold-soft bg-ink/95 p-3 backdrop-blur md:hidden">
      <WhatsAppButton
        label="Quiero vivir mi día de prueba"
        source="sticky"
        className="w-full"
      />
    </div>
  );
}
