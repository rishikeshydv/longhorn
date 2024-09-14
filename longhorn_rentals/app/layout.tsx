import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Longhorn Rentals",
  description: "Best Trailers in Texas",
};
export const tungstenBold = localFont({
  src: "@/fonts/Tungsten/Tungsten-Black.ttf",
  variable: "--font-tungsten-bold",
  weight: "900",
});

export const tungstenSemiBold = localFont({
  src: "@/fonts/Tungsten/Tungsten-Bold.ttf",
  variable: "--font-tungsten-semi-bold",
  weight: "700",
});

export const tungstenMedium = localFont({
  src: "@/fonts/Tungsten/Tungsten-Medium.ttf",
  variable: "--font-tungsten-medium",
  weight: "500",
});

export const tungsten = localFont({
  src: "@/fonts/Tungsten/Tungsten-SemiBold.ttf",
  variable: "--font-tungsten",
  weight: "600",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      className={`${tungstenMedium.className}`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
