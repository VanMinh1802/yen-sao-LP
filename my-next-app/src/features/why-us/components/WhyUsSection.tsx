import { SectionHeader } from "@/features/shared";
import { BentoGrid } from "./BentoGrid";

export function WhyUsSection() {
  return (
    <section id="why-us" className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-brown-900 via-red-950 to-brown-900 border-t border-gold-500/10">
      {/* Decorative Orb */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(212,168,67,0.12)_0%,transparent_70%)] pointer-events-none rounded-full transform translate-x-1/4 -translate-y-1/4 blur-3xl z-0" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(220,38,38,0.08)_0%,transparent_70%)] pointer-events-none rounded-full transform -translate-x-1/4 translate-y-1/4 blur-3xl z-0" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeader 
          label="Cam Kết Chất Lượng"
          title="Tại Sao Chọn Ngọc Thảo?"
          subtitle="Chúng tôi không chỉ bán yến sào — chúng tôi mang đến trải nghiệm và niềm tin cho khách hàng."
          variant="dark"
        />

        <BentoGrid />
      </div>
    </section>
  );
}
