"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { CarouselNav } from "@/app/components/landing/CarouselNav";
import { useVisibleCount } from "@/app/lib/useVisibleCount";

export function TestimonialGallery({
  testimonials,
}: {
  testimonials: { src: string; alt: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [requestedPage, setRequestedPage] = useState(0);
  const perPage = useVisibleCount();

  const pages = Math.ceil(testimonials.length / perPage);
  const page = Math.min(requestedPage, pages - 1);
  const start = Math.min(page * perPage, Math.max(testimonials.length - perPage, 0));
  const visible = testimonials.slice(start, start + perPage);
  const goToPage = (step: number) => setRequestedPage((page + step + pages) % pages);

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
      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-4 px-6 md:grid-cols-3">
        {visible.map((testimonial, i) => (
          <button
            key={testimonial.src}
            type="button"
            onClick={() => setOpenIndex(start + i)}
            className="group relative mx-auto aspect-9/16 w-full max-w-xs overflow-hidden rounded-lg border border-gold-soft md:max-w-none"
          >
            <Image
              src={testimonial.src}
              alt={testimonial.alt}
              fill
              sizes="(min-width: 768px) 33vw, 320px"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
          </button>
        ))}
      </div>

      <CarouselNav
        index={page}
        count={pages}
        onPrev={() => goToPage(-1)}
        onNext={() => goToPage(1)}
        onSelect={setRequestedPage}
        label="página"
      />

      {openIndex !== null &&
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
                src={testimonials[openIndex].src}
                alt={testimonials[openIndex].alt}
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
