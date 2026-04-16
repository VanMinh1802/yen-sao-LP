"use client";

export function HeroButtons() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-row gap-3 mt-8 w-full sm:w-fit">
      <a
        href="#products"
        onClick={(e) => handleScroll(e, "#products")}
        className="flex-1 text-center sm:min-w-[180px] bg-gradient-to-br from-gold-500 to-gold-400 text-brown-900 px-2 sm:px-8 py-3 rounded-full text-sm sm:text-base font-bold select-none hover:-translate-y-[2px] hover:shadow-[0_4px_14px_0_rgba(212,168,67,0.4)] transition-all duration-300"
      >
        Xem Sản Phẩm
      </a>
      <a
        href="#contact"
        onClick={(e) => handleScroll(e, "#contact")}
        className="flex-1 text-center sm:min-w-[180px] bg-gradient-to-br from-gold-500 to-gold-400 text-brown-900 px-2 sm:px-8 py-3 rounded-full text-sm sm:text-base font-bold select-none hover:-translate-y-[2px] hover:shadow-[0_4px_14px_0_rgba(212,168,67,0.4)] transition-all duration-300"
      >
        Liên Hệ Ngay
      </a>
    </div>
  );
}
