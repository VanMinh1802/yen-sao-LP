import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Using native emojis for icons to reduce dependencies; could be replaced with SVG/Lucide later
const FacebookIcon = () => <span className="text-sm">📘</span>;
const TiktokIcon = () => <span className="text-sm">🎵</span>;
const ZaloIcon = () => <span className="text-sm">💬</span>;

export function Footer() {
  return (
    <footer className="bg-brown-900 text-white-70 pt-16 pb-8 border-t border-white-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-12 lg:gap-8 xl:gap-12 mb-16">
          {/* Col 1 */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12 shrink-0">
                <Image
                  src="/images/logo/logoyen.webp"
                  alt="Yến Sào Ngọc Thảo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-heading font-bold text-white uppercase">
                Yến Sào Ngọc Thảo
              </span>
            </div>
            <p className="text-sm leading-[1.8] text-white-70 max-w-sm">
              Yến Sào Ngọc Thảo Khánh Hòa — 20 năm uy tín mang đến sản phẩm yến sào 100% tự nhiên, chất lượng cao nhất từ nhà yến độc quyền tại Nha Trang.
            </p>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-gold-400 text-base uppercase tracking-[1px] font-bold">
              Liên Kết
            </h3>
            <ul className="flex flex-col space-y-3">
              {[
                { label: "Giới Thiệu", href: "#about" },
                { label: "Sản Phẩm", href: "#products" },
                { label: "Cam Kết", href: "#why-us" },
                { label: "Đánh Giá", href: "#testimonials" },
                { label: "Liên Hệ", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-gold-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-gold-400 text-base uppercase tracking-[1px] font-bold">
              Sản Phẩm
            </h3>
            <ul className="flex flex-col space-y-3">
              {[
                "Yến Thô Nguyên Tổ",
                "Yến Sợi Cao Cấp",
                "Yến Tinh Chế",
                "Hộp Quà Tặng",
              ].map((item) => (
                <li key={item}>
                  <Link href="#products" className="text-sm hover:text-gold-400 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-gold-400 text-base uppercase tracking-[1px] font-bold">
              Liên Hệ
            </h3>
            <ul className="flex flex-col space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <span className="text-gold-400 mt-0.5">📞</span>
                <div>
                  <p>(0258) 3821 494</p>
                  <p>0919 217 882</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-gold-400 mt-0.5">✉️</span>
                <span>yensaongocthao@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-gold-400 mt-0.5">📍</span>
                <span>Tổ 13, Cồn Ngọc Thảo, Tây Nha Trang, Khánh Hòa</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white-10 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-xs text-white-50">
            © 2026 Yến Sào Ngọc Thảo Khánh Hòa. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full border border-white-20 text-white-70 hover:text-gold-400 hover:border-gold-400 transition-colors" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full border border-white-20 text-white-70 hover:text-gold-400 hover:border-gold-400 transition-colors" aria-label="TikTok">
              <TiktokIcon />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full border border-white-20 text-white-70 hover:text-gold-400 hover:border-gold-400 transition-colors" aria-label="Zalo">
              <ZaloIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
