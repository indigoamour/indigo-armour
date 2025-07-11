import "./globals.css";
import type { Metadata } from "next";
import { Urbanist, Anek_Devanagari } from "next/font/google";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";
import Script from "next/script";

export const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
});

export const anek = Anek_Devanagari({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Indigo Amour",
  description: "Shop your dyed clothes from Indigo Amour",
  keywords: ["Indigo Amour", "dyed clothes", "handmade clothing", "fashion", "sustainable fashion"],
  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Meta Pixel Script */}
        <Script id="fb-pixel-init" strategy="afterInteractive">
          {`
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1453290402356595');
fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body className={urbanist.className}>
        {/* Noscript Fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1453290402356595&ev=PageView&noscript=1"
          />
        </noscript>
        <ModalProvider />
        <ToastProvider />
        {/* <Navbar /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
