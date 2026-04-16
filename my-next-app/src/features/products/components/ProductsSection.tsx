import { SectionHeader } from "@/features/shared";
import { ProductGrid } from "./ProductGrid";

export function ProductsSection() {
  return (
    <section id="products" className="py-24 bg-cream-100 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader 
          label="Bộ Sưu Tập"
          title="Sản Phẩm Yến Sào"
          subtitle="Mỗi sản phẩm đều được tuyển chọn kỹ lưỡng, đảm bảo chất lượng tự nhiên từ nhà yến riêng tại Nha Trang."
        />

        <div className="mt-12 w-full">
          <ProductGrid />
        </div>
      </div>
    </section>
  );
}
