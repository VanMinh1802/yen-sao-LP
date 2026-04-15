"use client";

export function HeroButtons() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-row gap-4 flex-wrap mt-8">
      <a
        href="#products"
        onClick={(e) => handleScroll(e, "#products")}
        className="bg-gradient-to-br from-gold-500 to-gold-400 text-brown-900 px-8 py-3 rounded-full font-bold select-none hover:-translate-y-[2px] hover:shadow-[0_4px_14px_0_rgba(212,168,67,0.4)] transition-all duration-300"
      >
        Xem Sản Phẩm
      </a>
      <a
        href="#contact"
        onClick={(e) => handleScroll(e, "#contact")}
        className="bg-transparent text-gold-400 border-2 border-gold-400 px-8 py-3 rounded-full font-bold select-none hover:bg-gold-400 hover:text-brown-900 transition-all duration-300"
      >
        Liên Hệ Ngay
      </a>
    </div>
  );
}
