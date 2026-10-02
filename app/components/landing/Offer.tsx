import business from "@/content/business.json";
import { Reveal } from "@/app/components/landing/Reveal";
import { SectionHeading } from "@/app/components/landing/SectionHeading";
import { WhatsAppButton } from "@/app/components/landing/WhatsAppButton";

const INCLUDES = [
  "6 horas de taller presencial",
  "Curso grabado para repasar",
  "Análisis y feedback personalizado",
  "Plan de acción para seguir avanzando",
];

export function Offer() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20 text-center">
      <Reveal>
        <SectionHeading eyebrow="La inversión" title="Experiencia Origen" />

        <p className="mt-8 font-serif text-6xl text-gold">S/ 97</p>
        <p className="mt-2 text-sm text-gray-text">
          Pago único · Cupos limitados
        </p>

        <ul className="mx-auto mt-8 max-w-sm space-y-2 text-left text-gray-text">
          {INCLUDES.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>

        <div className="mt-8 rounded-lg border border-gold-soft bg-ink-raised p-5 text-left">
          <p className="font-display text-sm uppercase tracking-wide text-ivory">
            Próxima fecha: {business.nextWorkshopDate}
          </p>
          <p className="mt-1 text-sm text-gray-text">
            Cupos limitados en Lima.
          </p>
          <p className="mt-3 text-sm text-gray-text">
            Métodos de pago: Yape, Plin o transferencia, coordinados por
            WhatsApp.
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <WhatsAppButton label="Reservar mi cupo" source="offer" />
        </div>
      </Reveal>
    </section>
  );
}
