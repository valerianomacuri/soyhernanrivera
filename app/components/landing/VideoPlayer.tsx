"use client";

import { useEffect, useRef, useState } from "react";
import { Maximize, Pause, Play, Volume2, VolumeX } from "lucide-react";

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds)) return "0:00";
  const total = Math.floor(seconds);
  return `${Math.floor(total / 60)}:${String(total % 60).padStart(2, "0")}`;
}

export function VideoPlayer({
  src,
  poster,
  aspect = "video",
  autoPlay = false,
  loop = false,
  muted = false,
  className = "",
}: {
  src: string;
  poster?: string;
  aspect?: "video" | "portrait";
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(muted);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (videoRef.current) videoRef.current.muted = isMuted;
  }, [isMuted]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) void video.play();
    else video.pause();
  };

  const seek = (value: number) => {
    if (videoRef.current) videoRef.current.currentTime = value;
    setCurrentTime(value);
  };

  const toggleFullscreen = () => {
    if (document.fullscreenElement) void document.exitFullscreen();
    else void containerRef.current?.requestFullscreen?.();
  };

  const progress = duration ? (currentTime / duration) * 100 : 0;
  const aspectClass =
    aspect === "portrait" ? "aspect-[9/16] max-h-[80vh] max-w-sm mx-auto" : "aspect-video w-full";

  return (
    <div
      ref={containerRef}
      className={`group relative overflow-hidden rounded-lg border border-gold-soft bg-black ${aspectClass} ${className}`}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline
        preload="metadata"
        onClick={togglePlay}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
        onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
        className="h-full w-full cursor-pointer object-contain"
      />

      {!isPlaying && (
        <button
          type="button"
          onClick={togglePlay}
          aria-label="Reproducir"
          className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gold text-ink shadow-lg transition-transform hover:scale-105"
        >
          <Play className="ml-1 h-7 w-7" fill="currentColor" strokeWidth={0} />
        </button>
      )}

      <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 bg-gradient-to-t from-black/90 to-transparent px-3 pb-2 pt-8">
        <button
          type="button"
          onClick={togglePlay}
          aria-label={isPlaying ? "Pausar" : "Reproducir"}
          className="text-gold"
        >
          {isPlaying ? (
            <Pause className="h-5 w-5" fill="currentColor" strokeWidth={0} />
          ) : (
            <Play className="h-5 w-5" fill="currentColor" strokeWidth={0} />
          )}
        </button>

        <input
          type="range"
          min={0}
          max={duration || 0}
          step="any"
          value={currentTime}
          onChange={(event) => seek(Number(event.target.value))}
          aria-label="Progreso del video"
          className="video-range min-w-0 flex-1"
          style={{ "--progress": `${progress}%` } as React.CSSProperties}
        />

        <span className="hidden shrink-0 font-display text-xs tracking-wide text-ivory sm:block">
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>

        <button
          type="button"
          onClick={() => setIsMuted((value) => !value)}
          aria-label={isMuted ? "Activar sonido" : "Silenciar"}
          className="text-gold"
        >
          {isMuted ? (
            <VolumeX className="h-5 w-5" strokeWidth={1.5} />
          ) : (
            <Volume2 className="h-5 w-5" strokeWidth={1.5} />
          )}
        </button>

        <button
          type="button"
          onClick={toggleFullscreen}
          aria-label="Pantalla completa"
          className="text-gold"
        >
          <Maximize className="h-5 w-5" strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}
