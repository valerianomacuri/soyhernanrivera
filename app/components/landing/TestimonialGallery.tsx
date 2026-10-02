"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export function TestimonialGallery({
  testimonials,
}: {
  testimonials: { id: number }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const goTo = (step: number) => {
    setOpenIndex((current) => {
      if (current === null) return current;
      return (current + step + testimonials.length) % testimonials.length;
    });
  };

  useEffect(() => {
    if (openIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenIndex(null);
      if (event.key === "ArrowRight") goTo(1);
      if (event.key === "ArrowLeft") goTo(-1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openIndex, testimonials.length]);

  return (
    <>
      <div className="mt-12 flex gap-4 overflow-x-auto px-6 pb-2 snap-x">
        {testimonials.map((testimonial, index) => (
          <button
            key={testimonial.id}
            type="button"
            onClick={() => setOpenIndex(index)}
            className="group relative aspect-9/16 w-72 shrink-0 snap-center overflow-hidden rounded-lg border border-gold-soft"
          >
            <Image
              src={`/testimonial-${testimonial.id}.jpg`}
              alt={`Alumno ${testimonial.id}`}
              fill
              sizes="288px"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
          </button>
        ))}
      </div>

      {mounted &&
        openIndex !== null &&
        createPortal(
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
            onClick={() => setOpenIndex(null)}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(null)}
              aria-label="Cerrar"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-gold-soft bg-ink/80 text-gold"
            >
              <X className="h-5 w-5" strokeWidth={1.5} />
            </button>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                goTo(-1);
              }}
              aria-label="Testimonio anterior"
              className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gold-soft bg-ink/80 text-gold sm:left-4"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
            </button>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                goTo(1);
              }}
              aria-label="Siguiente testimonio"
              className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gold-soft bg-ink/80 text-gold sm:right-4"
            >
              <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
            </button>

            <div
              className="relative h-[90vh] w-[90vw] max-w-3xl"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={`/testimonial-${testimonials[openIndex].id}.jpg`}
                alt={`Alumno ${testimonials[openIndex].id}`}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
