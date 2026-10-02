import { ChevronDown } from "lucide-react";
import business from "@/content/business.json";
import { Reveal } from "@/app/components/landing/Reveal";
import { SectionHeading } from "@/app/components/landing/SectionHeading";

const FAQS = [
  {
    question: "¿Y si soy muy tímido?",
    answer:
      "Justamente para eso es el taller. Empezamos desde la base y avanzas a tu ritmo, acompañado por el coach en todo momento.",
  },
  {
    question: "¿Tengo que hablar con mujeres ese mismo día?",
    answer:
      "Sí, pero a tu ritmo y acompañado. Nadie te empuja a hacer algo que no estés listo para hacer.",
  },
  {
    question: "¿Cuántas personas van por grupo?",
    answer: `Grupos reducidos de hasta ${business.slotsPerDate} personas por fecha, para que cada uno reciba atención real.`,
  },
  {
    question: "¿Qué edad tienen los participantes?",
    answer: "La mayoría tiene entre 20 y 40 años.",
  },
  {
    question: "¿Es un curso de manipulación?",
    answer: "No. Todo el enfoque es respeto y autenticidad, nunca manipulación.",
  },
  {
    question: "¿Qué pasa si no puedo asistir?",
    answer: business.reschedulePolicy,
  },
];

export function Faq() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <Reveal>
        <SectionHeading eyebrow="Preguntas frecuentes" title="Antes de que preguntes" className="text-center" />
      </Reveal>

      <Reveal delay={100} className="mt-10">
        <div className="divide-y divide-gold-soft">
          {FAQS.map(({ question, answer }) => (
            <details key={question} className="group py-4">
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-sm uppercase tracking-wide text-ivory">
                {question}
                <ChevronDown className="h-4 w-4 shrink-0 text-gold transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm text-gray-text">{answer}</p>
            </details>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
