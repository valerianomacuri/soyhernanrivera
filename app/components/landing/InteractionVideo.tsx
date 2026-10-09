import { VideoPlayer } from "@/app/components/landing/VideoPlayer";

export function InteractionVideo({ src }: { src: string }) {
  return <VideoPlayer src={src} aspect="portrait" autoPlay loop muted />;
}
