import { videoUrl } from "@/app/lib/videos";
import { Reveal } from "@/app/components/landing/Reveal";
import { SectionHeading } from "@/app/components/landing/SectionHeading";
import { InteractionVideo } from "@/app/components/landing/InteractionVideo";

export function DayPreview() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <Reveal>
        <SectionHeading
          eyebrow="El día"
          title="¿Cómo es un día de prueba de la experiencia Origen?"
          className="text-center"
        />
      </Reveal>
      <Reveal delay={120} className="mt-12">
        <InteractionVideo src={videoUrl("video-students.mp4")} />
      </Reveal>
    </section>
  );
}

const STEPS = [
  {
    title: "Conoce el método",
    subtitle: "Recibe un curso grabado",
    description:
      "Entiende cómo trabajamos comunicación, atracción, comportamiento, gestión emocional y experiencia social.",
  },
  {
    title: "Prepárate antes de salir a la cancha",
    description:
      "Participa en ejercicios de conversación, presencia y gestión emocional.",
  },
  {
    title: "Sal a la cancha",
    description:
      "Aplica parte del entrenamiento en situaciones reales, acompañado por miembros de nuestro equipo y un coach en toda la experiencia.",
  },
  {
    title: "Recibe feedback",
    description:
      "Descubre qué estás haciendo bien, dónde te estás bloqueando y qué necesitas desarrollar para tener resultados reales.",
  },
  {
    title: "Descubre tu nivel actual real",
    subtitle: "En base a tus experiencias reales",
    description:
      "Termina el día con mucha más claridad sobre tu punto actual y sobre cuál debería ser tu siguiente etapa de trabajo.",
  },
];

export function HowTheDayGoes() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <Reveal>
        <SectionHeading
          eyebrow="Paso a paso"
          title="El día de prueba funciona así"
          className="text-center"
        />
      </Reveal>

      <ol className="mt-12 space-y-8 border-l border-gold-soft pl-8">
        {STEPS.map(({ title, subtitle, description }, index) => (
          <Reveal key={title} delay={index * 60}>
            <li className="relative">
              <span className="absolute -left-[49px] flex h-8 w-8 items-center justify-center rounded-full bg-gold font-display text-sm text-ink">
                {index + 1}
              </span>
              <p className="font-display text-lg uppercase text-ivory">{title}</p>
              {subtitle && (
                <p className="mt-1 font-display text-xs uppercase tracking-wide text-gold">
                  {subtitle}
                </p>
              )}
              <p className="mt-2 text-sm text-gray-text">{description}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
