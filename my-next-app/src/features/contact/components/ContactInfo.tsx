import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

interface ContactInfoItem {
  icon: React.ReactNode;
  content: string;
  href?: string;
}

const contactItems: ContactInfoItem[] = [
  { icon: <MapPin className="w-[18px] h-[18px]" />, content: "Tổ 13, Cồn Ngọc Thảo, Tây Nha Trang, Khánh Hòa" },
  { icon: <Phone className="w-[18px] h-[18px]" />, content: "0986 786 753", href: "tel:0986786753" },
  { icon: <Mail className="w-[18px] h-[18px]" />, content: "yensaongocthao@gmail.com", href: "mailto:yensaongocthao@gmail.com" },
  { icon: <MessageCircle className="w-[18px] h-[18px]" />, content: "Zalo Official", href: "https://zalo.me/0986786753" },
];



export function ContactInfo() {
  return (
    <div className="mt-6 pt-6 border-t border-white/10">
      {/* Contact Info — Asymmetric 2-column grid */}
      <div className="grid grid-cols-[1.6fr_1fr] gap-x-2 gap-y-4">
        {contactItems.map((item, i) => {
          const inner = (
            <div className="flex items-start gap-2 text-white/80 hover:text-white transition-colors group min-w-0">
              <span className="shrink-0 mt-[2px] text-gold-400 group-hover:scale-110 transition-transform">{item.icon}</span>
              <span className="flex-1 min-w-0 text-[13.5px] md:text-sm font-medium leading-snug break-words pr-1">{item.content}</span>
            </div>
          );

          return item.href ? (
            <a
              key={i}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="min-w-0"
            >
              {inner}
            </a>
          ) : (
            <div key={i} className="min-w-0">{inner}</div>
          );
        })}
      </div>


    </div>
  );
}
