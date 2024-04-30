import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import globals from './globals.module.scss'
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MKS Sistemas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} ${globals['global-styles']}`}>{children}</body>
    </html>
  );
}
