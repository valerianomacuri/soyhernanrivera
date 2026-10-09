import { Compass, EyeOff, HeartCrack, ShieldQuestion } from "lucide-react";
import { Reveal } from "@/app/components/landing/Reveal";
import { SectionHeading } from "@/app/components/landing/SectionHeading";

const PROBLEMS = [
  {
    icon: Compass,
    text: "Sabes que estás viviendo por debajo de tu potencial real.",
  },
  {
    icon: HeartCrack,
    text: "No sabes cómo generar atracción y terminas siendo el chico agradable.",
  },
  {
    icon: EyeOff,
    text: "Tu vida social actual no te genera oportunidades reales para conocer mujeres.",
  },
  {
    icon: ShieldQuestion,
    text: "Tienes resultados en otras áreas, pero con las mujeres que realmente te gustan pierdes confianza.",
  },
];

export function ProblemSection() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <Reveal>
        <SectionHeading
          eyebrow="¿Te suena familiar?"
          title="Sabes lo que quieres hacer, pero cuando llega el momento te bloqueas"
          className="text-center"
        />
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {PROBLEMS.map(({ icon: Icon, text }, index) => (
          <Reveal key={text} delay={index * 80}>
            <div className="flex h-full items-start gap-4 rounded-lg border border-gold-soft bg-ink-raised p-5">
              <Icon className="mt-1 h-6 w-6 shrink-0 text-gold" strokeWidth={1.5} />
              <p className="text-ivory">{text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
