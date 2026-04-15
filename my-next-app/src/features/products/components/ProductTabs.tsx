"use client";

import { cn } from "@/lib/utils";

interface Tab {
  id: string;
  label: string;
  value: string;
}

export const PRODUCT_TABS: Tab[] = [
  { id: "tab-all", label: "Tất Cả", value: "all" },
  { id: "tab-raw", label: "Yến Thô", value: "raw" },
  { id: "tab-gift", label: "Hộp Quà Tặng", value: "gift" },
  { id: "tab-refined", label: "Yến Tinh Chế", value: "refined" },
];

interface ProductTabsProps {
  activeTab: string;
  onChange: (value: string) => void;
}

export function ProductTabs({ activeTab, onChange }: ProductTabsProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12" role="tablist">
      {PRODUCT_TABS.map((tab) => {
        const isActive = activeTab === tab.value;
        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(tab.value)}
            className={cn(
              "px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 border-2 outline-none focus-visible:ring-2 focus-visible:ring-gold-500",
              isActive
                ? "bg-gradient-to-r from-red-600 to-red-500 text-white border-transparent shadow-[0_4px_15px_rgba(220,38,38,0.4)]"
                : "bg-white text-brown-800 border-brown-200 hover:border-gold-500 hover:text-gold-600"
            )}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
