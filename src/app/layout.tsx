import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

export const poppins = Poppins({
  weight: ["200", "600", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AFEA Shop",
  description: "You can find any kind of product here!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
