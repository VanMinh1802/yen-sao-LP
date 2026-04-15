import { SectionHeader } from "@/features/shared";
import { ProcessSteps } from "./ProcessSteps";

export function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-brown-900 border-t border-gold-500/10 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader 
          label="Quy Trình Kiểm Định"
          title="Hành Trình Tạo Ra Giai Phẩm"
          subtitle="Mỗi tổ yến Ngọc Thảo là kết tinh của sự tận tâm, trải qua quy trình 5 bước nghiêm ngặt, giữ trọn vẹn dưỡng chất thiên nhiên ban tặng."
          variant="dark"
        />

        <div className="mt-16 md:mt-24">
          <ProcessSteps />
        </div>
      </div>
    </section>
  );
}
