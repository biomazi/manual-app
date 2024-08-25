import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const ttnorms = localFont({
  src: '../../public/tt-norms-pro/TTNormsProRegular.otf',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Manual App",
  description: "Manual landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ttnorms.className}>{children}</body>
    </html>
  );
}
