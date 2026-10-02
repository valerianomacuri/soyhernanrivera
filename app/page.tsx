import { Hero } from "@/app/components/landing/Hero";
import { ProblemSection } from "@/app/components/landing/ProblemSection";
import { WhatIsDaygame } from "@/app/components/landing/WhatIsDaygame";
import { HowTheDayGoes } from "@/app/components/landing/HowTheDayGoes";
import { WhatsIncluded } from "@/app/components/landing/WhatsIncluded";
import { SocialProof } from "@/app/components/landing/SocialProof";
import { Coach } from "@/app/components/landing/Coach";
import { ForYou } from "@/app/components/landing/ForYou";
import { Offer } from "@/app/components/landing/Offer";
import { Faq } from "@/app/components/landing/Faq";
import { FinalCta } from "@/app/components/landing/FinalCta";
import { Footer } from "@/app/components/landing/Footer";
import { StickyWhatsappButton } from "@/app/components/landing/StickyWhatsappButton";

export default function Home() {
  return (
    <div className="flex-1 pb-20 md:pb-0">
      <Hero />
      <ProblemSection />
      <WhatIsDaygame />
      <HowTheDayGoes />
      <WhatsIncluded />
      <SocialProof />
      <Coach />
      <ForYou />
      <Offer />
      <Faq />
      <FinalCta />
      <Footer />
      <StickyWhatsappButton />
    </div>
  );
}
