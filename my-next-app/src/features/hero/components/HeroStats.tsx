interface HeroStatProps {
  value: string;
  label: string;
}

const stats: HeroStatProps[] = [
  { value: "20+", label: "Năm" },
  { value: "100%", label: "Tự Nhiên" },
  { value: "1000+", label: "Khách Hàng" },
];

export function HeroStats() {
  return (
    <div className="flex flex-row gap-8 mt-10 pt-8 border-t border-gold-500/25">
      {stats.map((stat, index) => (
        <div key={index} className="flex flex-col">
          <span className="text-[clamp(24px,3vw,44px)] font-bold text-white leading-none mb-1">
            {stat.value}
          </span>
          <span className="text-[clamp(11px,1vw,15px)] text-gold-400 uppercase tracking-[1.5px]">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}
