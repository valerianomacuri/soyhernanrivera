import { Brain, ClipboardCheck, MapPin, MessagesSquare } from "lucide-react";
import business from "@/content/business.json";
import { Reveal } from "@/app/components/landing/Reveal";
import { SectionHeading } from "@/app/components/landing/SectionHeading";
import { InteractionVideo } from "@/app/components/landing/InteractionVideo";

const BLOCKS = [
  {
    icon: Brain,
    duration: "1 hora",
    title: "Mentalidad",
    description: "Manejo de la ansiedad de acercamiento y cómo pensar en frío antes de actuar.",
  },
  {
    icon: MessagesSquare,
    duration: "1 hora",
    title: "Estructura de conversación",
    description: "Apertura, conexión y cierre: el esqueleto de cualquier conversación natural.",
  },
  {
    icon: MapPin,
    duration: "3 horas",
    title: "Práctica en campo",
    description: `Acercamientos reales en ${business.practiceZone}, con el coach cerca y demostraciones en vivo.`,
  },
  {
    icon: ClipboardCheck,
    duration: "1 hora",
    title: "Feedback y plan de acción",
    description: "Retroalimentación individual y un plan claro para seguir avanzando.",
  },
];

export function HowTheDayGoes() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <Reveal>
        <SectionHeading eyebrow="El día" title="Cómo son las 6 horas" className="text-center" />
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <Reveal className="md:col-span-1">
          <ol className="space-y-6 border-l border-gold-soft pl-6">
            {BLOCKS.map(({ icon: Icon, duration, title, description }) => (
              <li key={title} className="relative">
                <span className="absolute -left-[31px] flex h-6 w-6 items-center justify-center rounded-full bg-gold text-ink">
                  <Icon className="h-3.5 w-3.5" strokeWidth={2} />
                </span>
                <p className="font-display text-xs uppercase tracking-wide text-gold">
                  {duration}
                </p>
                <p className="mt-1 font-display text-lg uppercase text-ivory">{title}</p>
                <p className="mt-1 text-sm text-gray-text">{description}</p>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={120}>
          <InteractionVideo />
        </Reveal>
      </div>
    </section>
  );
}
