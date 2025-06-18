import Footer from "@/components/footer";
import "./globals.css";
import type { Metadata } from "next";
import { Urbanist, Anek_Devanagari } from "next/font/google";
import Navbar from "@/components/navbar";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";

export const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap", 
});

export const anek = Anek_Devanagari({
  subsets: ["latin"],
  display: "swap", 
});

const metadata: Metadata = {
  title: "Indigo Amour",
  description: "Shop your dyed clothes from Indigo Amour",
  icons: {
    icon: "/favicon.ico", // This replaces the need for <Head> favicon
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <ModalProvider />
        <ToastProvider />
        {/* <Navbar /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
