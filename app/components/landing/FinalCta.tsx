import { Reveal } from "@/app/components/landing/Reveal";
import { WhatsAppButton } from "@/app/components/landing/WhatsAppButton";

export function FinalCta() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-24 text-center">
      <Reveal>
        <h2 className="font-display text-3xl uppercase leading-tight text-ivory sm:text-4xl">
          Dentro de un año vas a desear haber empezado hoy.
        </h2>
        <p className="mt-4 text-gray-text">
          Da el primer paso ahora. Los cupos son limitados.
        </p>
        <div className="mt-8 flex justify-center">
          <WhatsAppButton label="Reservar mi cupo" source="final-cta" />
        </div>
      </Reveal>
    </section>
  );
}
