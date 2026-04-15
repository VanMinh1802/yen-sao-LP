import { SectionHeader } from "@/features/shared";
import { ProcessSteps } from "./ProcessSteps";

export function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-cream-200 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader 
          label="Quy Trình Chế Biến"
          title="Từ Nhà Yến Đến Tay Bạn"
          subtitle="Quy trình tinh chế khép kín, giữ trọn 100% vi chất tự nhiên quý giá."
        />

        <div className="mt-16 md:mt-24">
          <ProcessSteps />
        </div>
      </div>
    </section>
  );
}

