import { Reveal } from "@/app/components/landing/Reveal";
import { SectionHeading } from "@/app/components/landing/SectionHeading";
import { TestimonialGallery } from "@/app/components/landing/TestimonialGallery";

const RESULTS = [
  {
    src: "/testimonials/testimonial-1.PNG",
    alt: "Resultado de alumno: salida con dos chicas",
  },
  {
    src: "/testimonials/testimonial-2.jpg",
    alt: "Testimonio escrito de alumno",
  },
  {
    src: "/testimonials/testimonial-3.PNG",
    alt: "Resultado de alumno: cita instantánea",
  },
  {
    src: "/testimonials/testimonial-4.PNG",
    alt: "Resultado de alumno",
  },
  {
    src: "/testimonials/testimonial-5.jpg",
    alt: "Resultado de alumno",
  },
];

export function Results() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Resultados"
            title="¿Qué resultados consiguen nuestros clientes trabajando con nosotros?"
            className="text-center"
          />
        </Reveal>
      </div>

      <Reveal delay={100}>
        <TestimonialGallery testimonials={RESULTS} />
      </Reveal>
    </section>
  );
}
