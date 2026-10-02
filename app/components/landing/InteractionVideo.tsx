"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export function InteractionVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) videoRef.current.muted = isMuted;
  }, [isMuted]);

  return (
    <div className="relative aspect-[4/5] h-full overflow-hidden rounded-lg border border-gold-soft">
      <video
        ref={videoRef}
        src="/conversation-1.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-full object-cover"
      />
      <button
        type="button"
        onClick={() => setIsMuted((muted) => !muted)}
        aria-label={isMuted ? "Activar sonido" : "Silenciar"}
        className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full border border-gold-soft bg-ink/80 text-gold"
      >
        {isMuted ? (
          <VolumeX className="h-4 w-4" strokeWidth={1.5} />
        ) : (
          <Volume2 className="h-4 w-4" strokeWidth={1.5} />
        )}
      </button>
    </div>
  );
}
