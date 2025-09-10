import Footer from "@/components/footer";
import AnimatedNavbar from "@/components/ui/animated-navbar/navbar";
import WorkshopWithArtisans from "@/sections/workshop-with-artisans";
import AboutUsHeroSection from "@/sections/hero-about-us";
import NaturalDyeingTechniques from "@/sections/natural-dyeing-technique";
import SustainablePractices from "@/sections/sustainable-practices";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Indigo Amour",
  description:
    "Learn about Indigo Amour's commitment to sustainable fashion, traditional dyeing techniques, and ethical clothing production.",
  keywords: [
    "about indigo amour",
    "sustainable fashion brand",
    "traditional dyeing techniques",
    "ethical clothing production",
    "hand-dyed fashion",
    "artisan craftsmanship",
    "natural dyeing process",
    "eco-friendly clothing",
    "sustainable textiles",
    "traditional crafts",
    "indigo dyeing techniques",
    "artisan workshops",
    "sustainable practices",
    "ethical fashion brand",
    "handcrafted clothing",
    "natural indigo",
    "traditional textile arts",
    "eco-conscious fashion",
    "sustainable fashion mission",
    "artisan collaboration"
  ],
};

export default function AboutUs() {
  return (
    <div className="relative overflow-hidden">
      <AnimatedNavbar />
      <h1 className="sr-only">About Indigo Amour: Sustainable Fashion and Ethical Production</h1>
      <AboutUsHeroSection />
      <WorkshopWithArtisans />
      {/* <NaturalDyeingTechniques /> */}
      <SustainablePractices />
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="text-gray-700 mb-2">Seema Singh</p>
          <p className="text-gray-700 mb-2">
            3792, Ground Floor, Sector 23, Gurugram - 122017
          </p>
          <p className="text-gray-700">Mobile: 9999530162</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
