import Image from "next/image";
import { WhatsAppButton } from "@/app/components/landing/WhatsAppButton";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover backdrop-opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-transparent to-ink/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="font-display text-4xl uppercase leading-tight text-ivory sm:text-6xl">
          Deja de bloquearte cuando realmente importa
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-gray-text">
          Vive la experiencia Origen y conoce una metodología para convertirte
          en el hombre que actúa con libertad y seguridad con las mujeres que
          realmente te atraen, lidera círculos sociales sin que el miedo, el
          rechazo o el sobrepensamiento decidan por ti.
        </p>
        <p className="mt-6 font-display text-sm uppercase tracking-wide text-gold">
          Vive un día de prueba Origen — S/97
        </p>
        <div className="mt-6 flex justify-center">
          <WhatsAppButton label="Quiero vivir mi día de prueba" source="hero" />
        </div>
        <p className="mx-auto mt-4 max-w-md text-sm text-gray-text">
          Vive un entrenamiento real en la ciudad de Lima junto a nuestra
          comunidad, descubre cuál es tu nivel actual y recibe claridad sobre
          qué necesitas trabajar para avanzar.
        </p>
      </div>
    </section>
  );
}
