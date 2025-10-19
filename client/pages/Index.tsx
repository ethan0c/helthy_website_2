import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FitnessSection } from "@/components/FitnessSection";
import { Features } from "@/components/Features";
import { DifferenceSection } from "@/components/DifferenceSection";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-helthy-black">
      <Header />
      <Hero />
      <FitnessSection />
      <Features />
      <DifferenceSection />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
