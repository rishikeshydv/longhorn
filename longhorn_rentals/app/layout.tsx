import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer/Footer";
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
      style={{fontFamily:"tungsten-medium"}}
      className="overflow-x-hidden"
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
