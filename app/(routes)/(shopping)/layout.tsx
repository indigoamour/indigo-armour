import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Marquee from "@/components/ui/marquee";
import type { Metadata } from "next";
import { urbanist, anek } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Shop Sustainable Hand-Dyed Fashion",
  description:
    "Browse our collection of hand-dyed, sustainable clothing. Unique pieces including dresses, tops, and accessories made with natural dyes.",
  keywords: [
    "shop sustainable fashion",
    "hand-dyed clothing store",
    "eco-friendly fashion shop",
    "natural dye clothing",
    "sustainable fashion collection",
    "handcrafted clothing shop",
    "indigo dyed clothing",
    "artisan fashion store",
    "sustainable apparel shop",
    "hand-dyed dresses",
    "eco-friendly clothing store",
    "natural indigo clothing",
    "sustainable fashion boutique",
    "handcrafted fashion shop",
    "traditional dyeing clothing",
    "artisan made clothing",
    "eco-conscious fashion store",
    "sustainable textile shop",
    "hand-dyed fashion collection",
    "natural dye fashion store"
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className={urbanist.className}>
        <Marquee>
          <span className="text-sm font-medium">
            FREE SHIPPING + Sale- get UPTO 40% OFF + Extra 10% Off on Prepaid
          </span>
        </Marquee>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
}
