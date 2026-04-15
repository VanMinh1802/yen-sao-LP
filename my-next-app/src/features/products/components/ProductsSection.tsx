import { SectionHeader } from "@/features/shared";
import { ProductGrid } from "./ProductGrid";

export function ProductsSection() {
  return (
    <section id="products" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader 
          label="Sản Phẩm Cốt Lõi"
          title="Tinh Hoa Yến Sào Ngọc Thảo"
          subtitle="Khám phá các dòng sản phẩm yến sào nguyên chất 100%, được tuyển chọn khắt khe và chế tác thủ công tinh xảo."
        />

        <div className="mt-12">
          <ProductGrid />
        </div>
      </div>
    </section>
  );
}
