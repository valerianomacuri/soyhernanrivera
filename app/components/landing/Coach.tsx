import Image from "next/image";
import business from "@/content/business.json";
import { Reveal } from "@/app/components/landing/Reveal";
import { SectionHeading } from "@/app/components/landing/SectionHeading";

export function Coach() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <div className="grid gap-10 sm:grid-cols-[220px_1fr] sm:items-center">
        <Reveal>
          <div className="relative aspect-square overflow-hidden rounded-full border border-gold-soft sm:rounded-lg">
            <Image
              src="/profile.jpg"
              alt={business.coachName}
              fill
              sizes="220px"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <SectionHeading eyebrow="Quién te acompaña" title={business.coachName} />
          <p className="mt-4 whitespace-pre-line text-gray-text">{business.coachBio}</p>
        </Reveal>
      </div>
    </section>
  );
}
