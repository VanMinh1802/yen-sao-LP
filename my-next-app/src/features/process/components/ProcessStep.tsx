import { cn } from "@/lib/utils";
import { ProcessStepData } from "../data/process-data";

interface ProcessStepProps {
  data: ProcessStepData;
  isLast?: boolean;
}

export function ProcessStep({ data, isLast }: ProcessStepProps) {
  return (
    <div className={cn(
      "relative flex flex-row md:flex-col items-center md:items-center text-left md:text-center group w-full z-10",
      !isLast ? "mb-0" : ""
    )}>
      {/* Icon Circle */}
      <div className="relative shrink-0 flex items-center justify-center w-20 h-20 md:w-[100px] md:h-[100px] bg-gradient-to-br from-white to-cream-100 rounded-full border-[4px] border-white shadow-[0_4px_20px_rgba(212,168,67,0.2)] md:mb-6 mr-6 md:mr-0 z-10">
        
        {/* Dashed spinning border */}
        <div className="absolute inset-[-8px] rounded-full border-2 border-dashed border-gold-500/40 animate-[spin_15s_linear_infinite]" />
        
        {/* Number Badge */}
        <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-7 h-7 md:w-8 md:h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-bold text-sm md:text-base border-2 border-white shadow-sm">
          {data.number}
        </div>
        
        <span className="text-3xl md:text-4xl filter drop-shadow-sm group-hover:scale-110 transition-transform duration-300">
          {data.icon}
        </span>
      </div>

      {/* Text Content */}
      <div className="flex flex-col flex-1 pb-2">
        <h3 className="text-lg md:text-xl font-bold text-brown-800 mb-2 md:whitespace-nowrap">
          {data.title}
        </h3>
        <p className="text-sm text-brown-600 leading-[1.6]">
          {data.description}
        </p>
      </div>
    </div>
  );
}
