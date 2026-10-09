import { Hero } from "@/app/components/landing/Hero";
import { ProblemSection } from "@/app/components/landing/ProblemSection";
import { DayPreview, HowTheDayGoes } from "@/app/components/landing/HowTheDayGoes";
import { Results } from "@/app/components/landing/Results";
import { Coach } from "@/app/components/landing/Coach";
import { VideoTestimonials } from "@/app/components/landing/VideoTestimonials";
import { MoreTestimonials } from "@/app/components/landing/MoreTestimonials";
import { Offer } from "@/app/components/landing/Offer";
import { Faq } from "@/app/components/landing/Faq";
import { Footer } from "@/app/components/landing/Footer";
import { StickyWhatsappButton } from "@/app/components/landing/StickyWhatsappButton";

export default function Home() {
  return (
    <div className="flex-1 pb-20 md:pb-0">
      <Hero />
      <ProblemSection />
      <DayPreview />
      <HowTheDayGoes />
      <Results />
      <Coach />
      <VideoTestimonials />
      <MoreTestimonials />
      <Offer />
      <Faq />
      <Footer />
      <StickyWhatsappButton />
    </div>
  );
}
