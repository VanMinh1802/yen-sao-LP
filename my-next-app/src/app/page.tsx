import { HeroSection } from "@/features/hero";
import { AboutSection } from "@/features/about";

export default function Home() {
  return (
    <main id="main-content" className="flex flex-col min-h-screen">
      {/* 
        Feature assembly points will be filled in subsequent tasks 
      */}
      <HeroSection />
      <AboutSection />
      {/* <ProductsSection /> */}
      {/* <ProcessSection /> */}
      {/* <WhyUsSection /> */}
      {/* <TestimonialsSection /> */}
      {/* <ContactSection /> */}
    </main>
  );
}
