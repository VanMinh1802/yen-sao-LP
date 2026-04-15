interface ContactInfoItem {
  icon: string;
  content: string;
  href?: string;
}

const contactItems: ContactInfoItem[] = [
  { icon: "📍", content: "Tổ 13, Cồn Ngọc Thảo, Tây Nha Trang, Khánh Hòa" },
  { icon: "📞", content: "0919 217 882", href: "tel:0919217882" },
  { icon: "✉️", content: "yensaongocthao@gmail.com", href: "mailto:yensaongocthao@gmail.com" },
  { icon: "💬", content: "Zalo Official", href: "https://zalo.me/0919217882" },
];

interface SocialLink {
  icon: string;
  label: string;
  href: string;
}

const socialLinks: SocialLink[] = [
  { icon: "📘", label: "Facebook", href: "https://www.facebook.com/yensaongocthao" },
  { icon: "🎵", label: "TikTok", href: "#" },
];

export function ContactInfo() {
  return (
    <div className="mt-6 pt-6 border-t border-white/10">
      {/* Contact Info — 2-column grid */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-4 mb-6">
        {contactItems.map((item, i) => {
          const inner = (
            <div className="flex items-start gap-2 text-white/80 hover:text-white transition-colors group min-w-0">
              <span className="text-base shrink-0 mt-0.5 group-hover:scale-110 transition-transform">{item.icon}</span>
              <span className="text-sm font-medium leading-snug break-all">{item.content}</span>
            </div>
          );

          return item.href ? (
            <a
              key={i}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {inner}
            </a>
          ) : (
            <div key={i}>{inner}</div>
          );
        })}
      </div>

      {/* Social Links */}
      <div className="flex gap-3">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="w-10 h-10 rounded-xl bg-white/[0.08] border border-white/10 flex items-center justify-center text-lg hover:bg-gold-500 hover:text-brown-900 hover:border-gold-500 hover:-translate-y-[3px] shadow-[0_2px_8px_rgba(0,0,0,0.1)] transition-all duration-300"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
