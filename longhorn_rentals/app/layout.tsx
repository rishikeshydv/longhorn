import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import { tungstenMedium } from "@/styles/fonts";
export const metadata: Metadata = {
  title: "Longhorn Rentals",
  description: "Best Trailers in Texas",
};

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
