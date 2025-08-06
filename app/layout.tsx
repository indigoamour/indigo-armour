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

        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PZ9B2D3J');`}
        </Script>

        <title>Indigo Amour</title>
        <meta
          name="description"
          content="Shop your dyed clothes from Indigo Amour"
        />
        <meta
          name="keywords"
          content="Indigo Amour, dyed clothes, handmade clothing, fashion, sustainable fashion"
        />
        <link rel="icon" href="/favicon.ico" />
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
         <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PZ9B2D3J"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
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
