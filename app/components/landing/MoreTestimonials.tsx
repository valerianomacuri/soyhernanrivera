"use client";

import { useState } from "react";
import business from "@/content/business.json";
import { Reveal } from "@/app/components/landing/Reveal";
import { SectionHeading } from "@/app/components/landing/SectionHeading";
import { YouTubeEmbed } from "@/app/components/landing/YouTubeEmbed";
import { CarouselNav } from "@/app/components/landing/CarouselNav";

const VIDEOS = business.testimonialVideos;

export function MoreTestimonials() {
  const [index, setIndex] = useState(0);

  const goTo = (step: number) =>
    setIndex((i) => (i + step + VIDEOS.length) % VIDEOS.length);

  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <Reveal>
        <SectionHeading
          eyebrow="Historias reales"
          title="Otros testimonios de hombres que cambiaron su vida"
          className="text-center"
        />
      </Reveal>

      <Reveal delay={100} className="mx-auto mt-12 max-w-2xl">
        <YouTubeEmbed
          key={VIDEOS[index]}
          videoId={VIDEOS[index]}
          title={`Testimonio de alumno ${index + 1}`}
        />
        <CarouselNav
          index={index}
          count={VIDEOS.length}
          onPrev={() => goTo(-1)}
          onNext={() => goTo(1)}
          onSelect={setIndex}
          label="testimonio"
        />
      </Reveal>
    </section>
  );
}
