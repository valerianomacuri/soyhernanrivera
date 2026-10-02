import business from "@/content/business.json";
import { Reveal } from "@/app/components/landing/Reveal";
import { SectionHeading } from "@/app/components/landing/SectionHeading";
import { TestimonialGallery } from "@/app/components/landing/TestimonialGallery";
import { YouTubeEmbed } from "@/app/components/landing/YouTubeEmbed";

const TESTIMONIALS = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

export function SocialProof() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Prueba social"
            title="Lo que dicen después de vivirlo"
            className="text-center"
          />
        </Reveal>
      </div>

      <Reveal delay={100}>
        <TestimonialGallery testimonials={TESTIMONIALS} />
      </Reveal>

      <div className="mx-auto mt-10 max-w-5xl px-6">
        <Reveal delay={160}>
          <div className="grid gap-6 sm:grid-cols-2 [&>*:last-child]:sm:col-span-2 [&>*:last-child]:sm:mx-auto [&>*:last-child]:sm:max-w-md">
            {business.testimonialVideos.map((videoId, index) => (
              <YouTubeEmbed
                key={videoId}
                videoId={videoId}
                title={`Testimonio de alumno ${index + 1}`}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
