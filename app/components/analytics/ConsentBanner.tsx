"use client";

import { useConsent, setConsent } from "@/app/lib/consent";

export function ConsentBanner() {
  const consent = useConsent();
  if (consent !== "unset") return null;

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      className="fixed inset-x-0 bottom-20 z-[60] mx-3 rounded-xl border border-gold-soft bg-ink/95 p-4 text-sm text-ivory shadow-lg backdrop-blur md:bottom-4 md:left-auto md:right-4 md:max-w-md"
    >
      <p className="text-gray-text">
        Usamos cookies y herramientas de analítica y publicidad (Meta Pixel,
        Google Analytics y Microsoft Clarity) para medir y mejorar esta página.
        Puedes rechazarlas.
      </p>
      <div className="mt-3 flex gap-2">
        <button
          type="button"
          onClick={() => setConsent("granted")}
          className="flex-1 rounded-full bg-gold px-4 py-2 font-display uppercase tracking-wide text-ink hover:bg-gold/90"
        >
          Aceptar
        </button>
        <button
          type="button"
          onClick={() => setConsent("denied")}
          className="flex-1 rounded-full border border-gold px-4 py-2 font-display uppercase tracking-wide text-gold hover:bg-gold/10"
        >
          Rechazar
        </button>
      </div>
    </div>
  );
}
