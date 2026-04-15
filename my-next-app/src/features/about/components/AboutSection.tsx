import { SectionHeader } from "@/features/shared";
import { Timeline } from "./Timeline";
import { StatCounter } from "./StatCounter";

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-cream-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader 
          label="Câu Chuyện Của Chúng Tôi"
          title="Hơn 20 Năm Tâm Huyết Với Yến Sào"
        />

        <div className="mt-8 md:mt-16">
          <Timeline />
        </div>

        {/* Stats Row */}
        <div className="mt-16 sm:mt-24 max-w-[900px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          <StatCounter value="20+" label="Năm Uy Tín" />
          <StatCounter value="100%" label="Tự Nhiên" />
          <StatCounter value="1000+" label="Khách Hàng" />
        </div>
      </div>
    </section>
  );
}
