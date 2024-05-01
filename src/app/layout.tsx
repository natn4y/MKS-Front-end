import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Toaster } from 'react-hot-toast';

import './globals.css';

import { Header } from '@/components/Header';
import Footer from '@/components/Footer';
import MenuAside from '@/components/AsideMenu';
import { CartProvider } from '@/contexts/CartContext';
import { ShoppingCartProvider } from '@/contexts/AsideMenuContext';

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
      <CartProvider>
        <ShoppingCartProvider>
          <body className={`${montserrat.className}`}>
            <Toaster />
            <MenuAside />
            <Header />
            {children}
            <Footer />
          </body>
        </ShoppingCartProvider>
      </CartProvider>
    </html>
  );
}
