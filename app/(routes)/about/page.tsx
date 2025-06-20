import Footer from "@/components/footer";
import AnimatedNavbar from "@/components/ui/animated-navbar/navbar";
import WorkshopWithArtisans from "@/sections/workshop-with-artisans";
import AboutUsHeroSection from "@/sections/hero-about-us";
import NaturalDyeingTechniques from "@/sections/natural-dyeing-technique";
import SustainablePractices from "@/sections/sustainable-practices";

export default function AboutUs() {
  return (
    <div className="relative overflow-hidden">
      <AnimatedNavbar />
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
