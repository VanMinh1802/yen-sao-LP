"use client";

export function HeroButtons() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-row gap-[clamp(12px,1.2vw,24px)] mt-3 sm:mt-4 md:mt-6 xl:mt-8 w-full sm:w-fit">
      <a
        href="#products"
        onClick={(e) => handleScroll(e, "#products")}
        className="flex-1 text-center min-w-[clamp(140px,14vw,220px)] bg-gradient-to-br from-gold-500 to-gold-400 text-brown-900 px-[clamp(20px,2vw,36px)] py-[clamp(10px,1.2vw,18px)] rounded-[30px] text-[clamp(14px,1.2vw,18px)] font-bold select-none whitespace-nowrap hover:-translate-y-[2px] hover:shadow-[0_4px_14px_0_rgba(212,168,67,0.4)] transition-all duration-300"
      >
        Xem Sản Phẩm
      </a>
      <a
        href="#contact"
        onClick={(e) => handleScroll(e, "#contact")}
        className="flex-1 text-center min-w-[clamp(140px,14vw,220px)] bg-gradient-to-br from-gold-500 to-gold-400 text-brown-900 px-[clamp(20px,2vw,36px)] py-[clamp(10px,1.2vw,18px)] rounded-[30px] text-[clamp(14px,1.2vw,18px)] font-bold select-none whitespace-nowrap hover:-translate-y-[2px] hover:shadow-[0_4px_14px_0_rgba(212,168,67,0.4)] transition-all duration-300"
      >
        Liên Hệ Ngay
      </a>
    </div>
  );
}
