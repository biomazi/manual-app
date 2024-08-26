import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";

const ttnorms = localFont({
  src: [
    {
      path: '../../public/tt-norms-pro/TTNormsProRegular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/tt-norms-pro/TTNormsProBold.otf',
      weight: '700',
      style: 'bold',
    },
  ],
  display: 'swap'
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
