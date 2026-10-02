import { Clock, Eye, Target, Video } from "lucide-react";
import { Reveal } from "@/app/components/landing/Reveal";
import { SectionHeading } from "@/app/components/landing/SectionHeading";

const ITEMS = [
  {
    icon: Clock,
    title: "6hs prácticas",
    description: "Vive situaciones reales y ponte en acción.",
  },
  {
    icon: Video,
    title: "Curso grabado",
    description: "Repasa y mejora lo aprendido cuando quieras.",
  },
  {
    icon: Eye,
    title: "Análisis personalizado",
    description: "Feedback en el momento para que veas tu nivel real.",
  },
  {
    icon: Target,
    title: "Plan de acción",
    description: "Te llevas un plan claro y personalizado para seguir avanzando.",
  },
];

export function WhatsIncluded() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <Reveal>
        <SectionHeading eyebrow="Qué incluye" title="Todo lo que te llevas" className="text-center" />
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {ITEMS.map(({ icon: Icon, title, description }, index) => (
          <Reveal key={title} delay={index * 80}>
            <div className="h-full rounded-lg border border-gold-soft bg-ink-raised p-6 text-center">
              <Icon className="mx-auto h-8 w-8 text-gold" strokeWidth={1.5} />
              <p className="mt-4 font-display text-sm uppercase tracking-wide text-ivory">
                {title}
              </p>
              <p className="mt-2 text-sm text-gray-text">{description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
