import { HeroSection } from "@/features/hero";
import { AboutSection } from "@/features/about";
import { ProductsSection } from "@/features/products";
import { ProcessSection } from "@/features/process";
import { WhyUsSection } from "@/features/why-us";
import { TestimonialsSection } from "@/features/testimonials";
import { ContactSection } from "@/features/contact";

export default function Home() {
  return (
    <main id="main-content" className="flex flex-col min-h-screen">
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <ProcessSection />
      <WhyUsSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
