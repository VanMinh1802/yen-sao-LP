import { SectionHeader } from "@/features/shared";
import { TestimonialCarousel } from "./TestimonialCarousel";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-cream-50 relative overflow-hidden overflow-x-hidden border-t border-brown-100/50">
      {/* Decorative background element */}
      <div className="absolute top-0 right-[-10%] md:right-[10%] transform translate-y-[0%] md:translate-y-[-10%] text-[200px] md:text-[400px] text-brown-100/10 md:text-brown-100/30 font-serif leading-none select-none pointer-events-none z-0">
        &rdquo;
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeader 
          label="Khách Hàng Nói Gì"
          title="Đánh Giá Từ Khách Hàng"
          subtitle="Sự tin tưởng của khách hàng là động lực lớn nhất để chúng tôi không ngừng nâng cao chất lượng."
        />

        <div className="mt-8 md:mt-16">
          <TestimonialCarousel />
        </div>
      </div>
    </section>
  );
}
