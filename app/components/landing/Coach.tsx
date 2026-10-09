import Image from "next/image";
import business from "@/content/business.json";
import { Reveal } from "@/app/components/landing/Reveal";
import { SectionHeading } from "@/app/components/landing/SectionHeading";

export function Coach() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
        <Reveal>
          <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border-2 border-gold">
            <Image
              src="/profile.jpg"
              alt={business.coachName}
              fill
              sizes="112px"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <SectionHeading
            eyebrow="Quién te acompaña"
            title="¿Quién es Hernán Rivera?"
          />
          <p className="mt-3 font-display text-sm uppercase tracking-wide text-gold">
            {business.coachRole}
          </p>
          <p className="mt-3 text-gray-text">{business.coachBio}</p>
        </Reveal>
      </div>

      <Reveal delay={160} className="mt-10">
        <video
          src="/videos/my-story.mp4"
          poster="/profile.jpg"
          controls
          playsInline
          preload="metadata"
          className="aspect-video w-full rounded-lg border border-gold-soft bg-black object-contain"
        />
      </Reveal>
    </section>
  );
}
