import { Product } from "../types/product.types";

interface ProductCardBackProps {
  product: Product;
}

export function ProductCardBack({ product }: ProductCardBackProps) {
  const handleConsultClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    document.querySelector("#contact")?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-red-600 to-gold-600 rounded-2xl [transform:rotateY(180deg)] [backface-visibility:hidden] p-8 flex flex-col items-center justify-center shadow-xl border border-gold-400">
      <h3 className="text-xl font-bold text-white mb-6 border-b border-white-20 pb-4 w-full text-center">
        Thông tin chi tiết
      </h3>
      
      <div className="flex flex-col gap-4 text-left w-full mb-8">
        {product.details.map((detail, idx) => (
          <div key={idx} className="flex gap-3 items-start">
            <span className="text-xl shrink-0 leading-none">{detail.icon}</span>
            <div className="flex flex-col">
              <span className="text-gold-300 text-sm font-semibold uppercase">{detail.title}</span>
              <span className="text-white text-sm leading-[1.4] mt-0.5">{detail.description}</span>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handleConsultClick}
        className="mt-auto px-6 py-3 bg-white text-red-700 font-bold uppercase rounded-full w-full hover:bg-gold-400 hover:text-white transition-colors"
      >
        Nhận Tư Vấn Ngay
      </button>
    </div>
  );
}
