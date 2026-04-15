import type { Metadata } from "next";
import { fontHeading, fontBody, fontDisplay } from "@/lib/fonts";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Yến Sào Ngọc Thảo Khánh Hòa — 20 Năm Uy Tín",
  description: "Yến Sào Ngọc Thảo Khánh Hòa — 20 năm kinh nghiệm, yến sào 100% tự nhiên, có nhà yến riêng tại Nha Trang.",
  keywords: "yến sào, ngọc thảo, khánh hòa, nha trang, bird nest, yến thô, hộp quà tặng",
  openGraph: {
    title: "Yến Sào Ngọc Thảo Khánh Hòa — 20 Năm Uy Tín",
    description: "Yến sào 100% tự nhiên từ nhà yến riêng tại Nha Trang. Hơn 20 năm uy tín.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={`${fontHeading.variable} ${fontBody.variable} ${fontDisplay.variable} antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
