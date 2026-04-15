import type { Metadata, Viewport } from "next";
import { fontHeading, fontBody, fontDisplay } from "@/lib/fonts";
import "./globals.css";
import { Providers } from "./providers";
import { Header, Footer, SkipLink } from "@/features/layout";

const SITE_URL = "https://yensaongocthao.vn";
const SITE_NAME = "Yến Sào Ngọc Thảo Khánh Hòa";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1A0A00",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Yến Sào Ngọc Thảo Khánh Hòa — Hơn 20 Năm Uy Tín",
    template: "%s | Yến Sào Ngọc Thảo",
  },
  description:
    "Yến sào Ngọc Thảo Khánh Hòa — hơn 20 năm kinh nghiệm, sở hữu nhà yến riêng tại Nha Trang. Yến sào 100% tự nhiên, tham quan trực tiếp, giao hàng toàn quốc.",
  keywords: [
    "yến sào",
    "yến sào ngọc thảo",
    "yến sào khánh hòa",
    "yến sào nha trang",
    "yến thô nguyên tổ",
    "yến tinh chế",
    "yến sợi cao cấp",
    "hộp quà tặng yến sào",
    "mua yến sào uy tín",
    "nhà yến nha trang",
    "bird nest vietnam",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Yến Sào Ngọc Thảo Khánh Hòa — Hơn 20 Năm Uy Tín",
    description:
      "Yến sào 100% tự nhiên từ nhà yến riêng tại Nha Trang. Hơn 20 năm uy tín, tham quan trực tiếp, giao hàng toàn quốc.",
    images: [
      {
        url: "/images/hero/hinh-yen.webp",
        width: 1200,
        height: 630,
        alt: "Yến Sào Ngọc Thảo Khánh Hòa — Sản phẩm yến sào cao cấp",
      },
    ],
  },
  alternates: {
    canonical: SITE_URL,
  },
  category: "Food & Beverage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Structured Data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    image: `${SITE_URL}/images/hero/hinh-yen.webp`,
    url: SITE_URL,
    telephone: "+84919217882",
    email: "yensaongocthao@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Tổ 13, Cồn Ngọc Thảo",
      addressLocality: "Nha Trang",
      addressRegion: "Khánh Hòa",
      addressCountry: "VN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 12.2648533,
      longitude: 109.1866704,
    },
    description:
      "Yến sào Ngọc Thảo Khánh Hòa — hơn 20 năm kinh nghiệm, sở hữu nhà yến riêng tại Nha Trang. Yến sào 100% tự nhiên.",
    foundingDate: "2006",
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "1000",
    },
    sameAs: [
      "https://www.facebook.com/yensaongocthao",
    ],
  };

  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preload" href="/images/hero/hinh-yen.webp" as="image" fetchPriority="high" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${fontHeading.variable} ${fontBody.variable} ${fontDisplay.variable} antialiased`}>
        <Providers>
          <SkipLink />
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
