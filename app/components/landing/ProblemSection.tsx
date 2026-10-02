import { MessageCircleOff, PauseCircle, Smartphone, Youtube } from "lucide-react";
import { Reveal } from "@/app/components/landing/Reveal";
import { SectionHeading } from "@/app/components/landing/SectionHeading";

const PROBLEMS = [
  {
    icon: MessageCircleOff,
    text: "La viste en el café y no dijiste nada.",
  },
  {
    icon: Smartphone,
    text: "Dependes de Tinder/Bumble y no te funciona.",
  },
  {
    icon: PauseCircle,
    text: "Te bloqueas justo cuando vas a hablar.",
  },
  {
    icon: Youtube,
    text: "Has visto mil videos en YouTube, pero nunca lo aplicaste.",
  },
];

export function ProblemSection() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <Reveal>
        <SectionHeading
          eyebrow="¿Te suena familiar?"
          title="Sabes lo que quieres decir. El problema es decirlo."
          className="text-center"
        />
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {PROBLEMS.map(({ icon: Icon, text }, index) => (
          <Reveal key={text} delay={index * 80}>
            <div className="flex items-start gap-4 rounded-lg border border-gold-soft bg-ink-raised p-5">
              <Icon className="mt-1 h-6 w-6 shrink-0 text-gold" strokeWidth={1.5} />
              <p className="text-ivory">{text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
