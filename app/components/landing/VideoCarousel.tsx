"use client";

import { useState } from "react";
import { CarouselNav } from "@/app/components/landing/CarouselNav";

export function VideoCarousel({
  videos,
}: {
  videos: { src: string; poster?: string }[];
}) {
  const [index, setIndex] = useState(0);
  const current = videos[index];

  const goTo = (step: number) =>
    setIndex((i) => (i + step + videos.length) % videos.length);

  return (
    <div className="mx-auto mt-12 max-w-2xl px-6">
      <video
        key={current.src}
        src={current.src}
        poster={current.poster}
        controls
        playsInline
        preload="metadata"
        className="aspect-video w-full rounded-lg border border-gold-soft bg-black object-contain"
      />

      <CarouselNav
        index={index}
        count={videos.length}
        onPrev={() => goTo(-1)}
        onNext={() => goTo(1)}
        onSelect={setIndex}
        label="video"
      />
    </div>
  );
}
