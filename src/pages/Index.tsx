import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { WhatYouLearn } from "@/components/WhatYouLearn";
import { FAQ } from "@/components/FAQ";
import { Guarantee } from "@/components/Guarantee";
import { Checkout } from "@/components/Checkout";
import { FloatingCTA } from "@/components/FloatingCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Benefits />
      <Testimonials />
      <CTA />
      <WhatYouLearn />
      <FAQ />
      <Guarantee />
      <Checkout />
      <FloatingCTA />
    </div>
  );
};

export default Index;
