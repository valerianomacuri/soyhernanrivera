import { Reveal } from "@/app/components/landing/Reveal";
import { SectionHeading } from "@/app/components/landing/SectionHeading";
import { WhatsAppButton } from "@/app/components/landing/WhatsAppButton";

const INCLUDES = [
  "Curso grabado",
  "6 horas de taller presencial",
  "Análisis de feedback personalizado",
  "Plan de acción para seguir avanzando",
  "Un camino real para transformar tu vida social y amorosa",
];

export function Offer() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20 text-center">
      <Reveal>
        <SectionHeading
          eyebrow="Qué obtienes por la inversión"
          title="Experiencia Origen"
        />

        <p className="mt-8 font-serif text-6xl text-gold">97 soles</p>
        <p className="mt-2 text-sm text-gray-text">
          Pago único por el día de prueba · Cupos limitados
        </p>

        <ul className="mx-auto mt-8 max-w-sm space-y-2 text-left text-gray-text">
          {INCLUDES.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>

        <div className="mt-8 flex justify-center">
          <WhatsAppButton
            label="Quiero vivir mi día de prueba"
            source="offer"
          />
        </div>
        <p className="mt-4 text-sm text-gray-text">
          Hernán te atenderá personalmente
        </p>
      </Reveal>
    </section>
  );
}
