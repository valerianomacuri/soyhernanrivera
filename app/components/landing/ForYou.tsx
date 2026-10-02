import { Check, X } from "lucide-react";
import { Reveal } from "@/app/components/landing/Reveal";
import { SectionHeading } from "@/app/components/landing/SectionHeading";

const FOR_YOU = [
  "Quieres dejar de depender solo de apps de citas.",
  "Estás dispuesto a salir de tu zona de confort, acompañado.",
  "Quieres aprender a aceptar un \"no\" con elegancia.",
  "Buscas confianza real, no frases memorizadas.",
];

const NOT_FOR_YOU = [
  "Buscas trucos para manipular a alguien.",
  "No estás dispuesto a practicar en la calle ese mismo día.",
  "Esperas resultados garantizados sin poner nada de tu parte.",
];

export function ForYou() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <Reveal>
        <SectionHeading eyebrow="¿Es para ti?" title="Para que no haya sorpresas" className="text-center" />
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-lg border border-gold-soft bg-ink-raised p-6">
            <p className="font-display text-sm uppercase tracking-wide text-gold">Es para ti si…</p>
            <ul className="mt-4 space-y-3">
              {FOR_YOU.map((item) => (
                <li key={item} className="flex items-start gap-3 text-ivory">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="h-full rounded-lg border border-gold-soft bg-ink-raised p-6">
            <p className="font-display text-sm uppercase tracking-wide text-gray-text">No es para ti si…</p>
            <ul className="mt-4 space-y-3">
              {NOT_FOR_YOU.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-text">
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-gray-text" strokeWidth={1.5} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
