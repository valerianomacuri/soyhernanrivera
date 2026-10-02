"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

export function YouTubeEmbed({ videoId, title }: { videoId: string; title: string }) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    return (
      <div className="aspect-video overflow-hidden rounded-lg border border-gold-soft">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setIsPlaying(true)}
      className="group relative block aspect-video w-full overflow-hidden rounded-lg border border-gold-soft"
    >
      <Image
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt={title}
        fill
        sizes="(min-width: 640px) 33vw, 100vw"
        className="object-cover opacity-80 transition-opacity group-hover:opacity-100"
      />
      <span className="absolute inset-0 flex items-center justify-center bg-black/30">
        <Play className="h-12 w-12 text-gold" strokeWidth={1.5} fill="currentColor" />
      </span>
    </button>
  );
}
