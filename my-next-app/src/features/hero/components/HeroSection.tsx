import { HeroContent } from "./HeroContent";

export function HeroSection() {
  return (
    <section id="hero" className="relative w-full lg:min-h-[100vh] flex flex-col-reverse lg:flex-row bg-brown-900 overflow-hidden">
      {/* Content wrapper: positioned properly via flex on mobile, takes full height on desktop */}
      <HeroContent />

      {/* Background Image Layer: relative 350px height on mobile, absolute full-bleed on desktop */}
      <div 
        className="relative lg:absolute lg:inset-0 w-full h-[350px] lg:h-full z-[1] bg-cover bg-[center_top] lg:bg-center bg-no-repeat shrink-0"
        style={{ backgroundImage: "url('/images/hero/hinh-yen.png')" }}
      >
        <div className="absolute inset-0 bg-black/15" />
        {/* Soft gradient fade on mobile to blend with content below */}
        <div className="lg:hidden absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brown-900 to-transparent z-[2]" />
      </div>
    </section>
  );
}
