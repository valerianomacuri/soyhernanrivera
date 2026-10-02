import Image from "next/image";
import business from "@/content/business.json";
import { WhatsAppButton } from "@/app/components/landing/WhatsAppButton";

export function Hero() {
  return (
    <section className="relative flex h-screen min-h-screen items-center overflow-hidden">
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
          Deja de quedarte con las ganas de hablarle.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-gray-text">
          Un día en Lima para desbloquear tus habilidades sociales viviendo
          experiencias reales, no teoría.
        </p>
        <p className="mt-6 font-display text-sm uppercase tracking-wide text-gold">
          Próxima fecha: {business.nextWorkshopDate}
        </p>
        <div className="mt-6 flex justify-center">
          <WhatsAppButton label="Reservar mi cupo" source="hero" />
        </div>
        <p className="mt-4 text-sm text-gray-text">Cupos limitados · S/ 97</p>
      </div>
    </section>
  );
}
