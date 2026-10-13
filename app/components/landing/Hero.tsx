import Image from "next/image";
import { WhatsAppButton } from "@/app/components/landing/WhatsAppButton";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/hero-2.jpg"
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
          DEJA DE BLOQUEARTE CON LAS MUJERES QUE REALMENTE TE ATRAEN{" "}
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-gray-text">
          Una metodología utilizada por más de 340 hombres para desarrollar
          seguridad, conectar con mujeres y dejar de sobrepensar cada
          interacción.
        </p>
        <p className="mt-6 font-display text-sm uppercase tracking-wide text-gold">
          6 HORAS DE ENTRENAMIENTO REAL · S/97{" "}
        </p>
        <div className="mt-6 flex justify-center">
          <WhatsAppButton label="Quiero vivir mi día de prueba" source="hero" />
        </div>
        <p className="mx-auto mt-4 max-w-md text-sm text-gray-text">
          Habla con un asesor para conocer cómo funciona y descubrir si esta
          experiencia es para ti.
        </p>
      </div>
    </section>
  );
}
