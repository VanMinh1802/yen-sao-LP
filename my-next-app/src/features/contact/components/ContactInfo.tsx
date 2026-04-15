interface ContactInfoItem {
  icon: string;
  content: string;
  href?: string;
}

const contactItems: ContactInfoItem[] = [
  { icon: "📍", content: "Nha Trang, Khánh Hòa" },
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
    <div className="mt-8 pt-6 border-t border-white/10">
      {/* Contact Info Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {contactItems.map((item, i) => {
          const content = (
            <div className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group">
              <span className="text-lg shrink-0 group-hover:scale-110 transition-transform">{item.icon}</span>
              <span className="text-sm leading-tight">{item.content}</span>
            </div>
          );

          return item.href ? (
            <a key={i} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}>
              {content}
            </a>
          ) : (
            <div key={i}>{content}</div>
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
            className="w-10 h-10 rounded-xl bg-white/[0.08] border border-white/10 flex items-center justify-center text-lg hover:bg-gold-500 hover:text-brown-900 hover:-translate-y-[3px] transition-all duration-300"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
