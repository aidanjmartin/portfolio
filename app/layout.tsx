import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aidan J Martin — Mechatronics Engineering Student / Research Assistant",
  description:
    "Mechatronics Engineering student at MTSU and Research Assistant at Vanderbilt MAPLE Lab. Focus areas: surgical robotics, advanced control, computer vision, and machine learning.",
  openGraph: {
    type: "website",
    title: "Aidan J Martin — Mechatronics Engineering Student / Research Assistant",
    description:
      "Research Assistant at Vanderbilt MAPLE Lab. Surgical robotics, autonomous systems, computer vision, and advanced control.",
    images: ["/images/headshot.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aidan J Martin",
    description: "Mechatronics Engineering Student / Research Assistant",
    images: ["/images/headshot.png"],
  },
  icons: {
    icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='4' fill='%232f4538'/><text x='16' y='22' text-anchor='middle' font-family='serif' font-size='18' font-weight='700' fill='%23f4ede0'>A</text></svg>",
    apple: "/images/headshot.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#2f4538",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jetbrains.variable} bg-parchment`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
