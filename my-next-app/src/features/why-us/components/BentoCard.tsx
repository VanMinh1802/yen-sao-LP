import { cn } from "@/lib/utils";
import { BentoCardData } from "../data/why-us-data";
import { AnimatedCounter } from "./AnimatedCounter";
import Image from "next/image";

interface BentoCardProps {
  data: BentoCardData;
}

export function BentoCard({ data }: BentoCardProps) {
  const isLarge = data.variant === "large";
  const isStats = data.variant === "stats";

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-[24px] transition-all duration-500 w-full h-full",
        "bg-white/[0.03] border border-white/10 backdrop-blur-md",
        "hover:-translate-y-2 hover:border-gold-500/50 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4),_inset_0_0_30px_rgba(212,168,67,0.1)]",
        isLarge ? "flex flex-col justify-end min-h-[360px]" : "min-h-[220px]",
        isStats ? "flex flex-col items-center justify-center text-center p-8 bg-gradient-to-br from-gold-900/20 to-red-900/20 border-gold-500/20" : "p-6 lg:p-8 flex flex-col"
      )}
    >
      {/* Background Image for Large Card */}
      {isLarge && data.backgroundImage && (
        <>
          <div className="absolute inset-0 w-full h-full z-0 opacity-40 group-hover:opacity-50 transition-opacity duration-500 overflow-hidden">
            <Image
              src={data.backgroundImage}
              alt={data.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        </>
      )}

      {/* Content wrapper */}
      <div className={cn("relative z-10 flex flex-col h-full", isLarge && "p-8 w-full h-auto mt-auto")}>
        {!isStats && (
          <div className="mb-4">
            <span className={cn(
              "flex items-center justify-center w-12 h-12 rounded-full bg-white/10 border border-white/20 text-2xl shadow-sm filter drop-shadow-md group-hover:bg-gold-500/20 transition-colors duration-300",
              isLarge && "w-14 h-14 text-3xl mb-2"
            )}>
              {data.icon}
            </span>
          </div>
        )}

        {isStats ? (
          <div className="flex flex-col items-center">
            <div className="text-5xl md:text-6xl font-extrabold text-gold-400 mb-2 font-heading tracking-tight drop-shadow-[0_2px_10px_rgba(212,168,67,0.3)]">
              {data.counterTarget ? (
                <><AnimatedCounter target={data.counterTarget} />+</>
              ) : (
                data.title
              )}
            </div>
            <p className="text-white/80 text-sm md:text-base font-semibold uppercase tracking-wider mt-2">{data.description}</p>
          </div>
        ) : (
          <div className="mt-auto">
            <h3 className={cn(
              "font-bold text-white mb-2 tracking-wide",
              isLarge ? "text-2xl md:text-3xl uppercase text-gold-400" : "text-lg md:text-xl"
            )}>
              {data.title}
            </h3>
            <p className={cn(
              "text-white/70 leading-[1.6]",
              isLarge ? "text-base max-w-sm" : "text-sm",
              "group-hover:text-white/90 transition-colors duration-300"
            )}>
              {data.description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
