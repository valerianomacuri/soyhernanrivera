import { ChevronDown } from "lucide-react";
import { Reveal } from "@/app/components/landing/Reveal";
import { SectionHeading } from "@/app/components/landing/SectionHeading";

const FAQS = [
  {
    question: "¿Y si me bloqueo o no sé qué decir cuando estoy frente a una mujer?",
    answer:
      "Precisamente para eso vienes. Aprenderás herramientas de comunicación y tendrás el acompañamiento de un coach para empezar a aplicarlas en situaciones reales.",
  },
  {
    question:
      "¿Y si ya tengo experiencia con mujeres, pero quiero llevar mis habilidades sociales a otro nivel?",
    answer:
      "ORIGEN no es solo para principiantes. Evaluaremos tu nivel actual para identificar qué necesitas mejorar en conversación, atracción, confianza y relaciones sociales.",
  },
  {
    question: "¿Tengo que acercarme a mujeres durante el día de prueba?",
    answer:
      "La experiencia incluye interacciones reales, pero primero recibirás preparación y entrenamiento. Después saldrás acompañado por nuestro equipo, avanzando según tu nivel.",
  },
  {
    question: "¿Qué diferencia hay entre el día de prueba de S/97 y la mentoría completa?",
    answer:
      "El día de prueba te permite conocer nuestra metodología, entrenar y recibir un diagnóstico inicial. La mentoría es un proceso de 90 días diseñado para desarrollar esas habilidades con acompañamiento continuo.",
  },
  {
    question: "¿Después del día de prueba estoy obligado a comprar la mentoría?",
    answer:
      "No. Tu inversión de S/97 cubre el día de prueba. Al finalizar tendrás mayor claridad sobre tu nivel y tus próximos pasos. Si quieres continuar, te explicaremos las opciones disponibles, sin ningún compromiso.",
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
