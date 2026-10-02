import { Reveal } from "@/app/components/landing/Reveal";
import { SectionHeading } from "@/app/components/landing/SectionHeading";

export function WhatIsDaygame() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20 text-center">
      <Reveal>
        <SectionHeading eyebrow="¿Qué es el daygame?" title="No son trucos. Son habilidades sociales." />
        <p className="mt-6 text-lg text-gray-text">
          El daygame es simplemente iniciar conversaciones con mujeres durante
          el día, en la calle, en un café o en un centro comercial. No se
          trata de memorizar frases ni manipular a nadie: se trata de
          practicar algo que ya sabes hacer con tus amigos — conversar con
          naturalidad — hasta que también puedas hacerlo con alguien que te
          gusta.
        </p>
      </Reveal>
    </section>
  );
}
