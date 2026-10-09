import { Reveal } from "@/app/components/landing/Reveal";
import { SectionHeading } from "@/app/components/landing/SectionHeading";
import { VideoCarousel } from "@/app/components/landing/VideoCarousel";

const VIDEOS = [1, 2, 3, 4, 5, 6].map((id) => ({
  src: `/videos/testimonial-${id}.mp4`,
}));

export function VideoTestimonials() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Testimonios"
            title="Qué dicen nuestros clientes después de trabajar con nosotros"
            className="text-center"
          />
        </Reveal>
      </div>
      <Reveal delay={100}>
        <VideoCarousel videos={VIDEOS} />
      </Reveal>
    </section>
  );
}
