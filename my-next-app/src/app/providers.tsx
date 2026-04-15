"use client";

import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  // Client-side providers like ThemeProvider, QueryClientProvider can be added here
  return <>{children}</>;
}
