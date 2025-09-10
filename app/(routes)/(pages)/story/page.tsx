import Footer from "@/components/footer";
import AnimatedNavbar from "@/components/ui/animated-navbar/navbar";
import DeclineOfTradition from "@/sections/decline-of-tradition";
import DyeingProcess from "@/sections/dyeing-process";
import EmpoweringLocalArtisans from "@/sections/empowering-local-artisans";
import OurStoryHeroSection from "@/sections/hero-our-story";
import RevivingALegacy from "@/sections/reviving-legacy";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story - Indigo Amour",
  description:
    "Discover the story behind Indigo Amour - from traditional dyeing techniques to empowering local artisans and reviving heritage crafts.",
  keywords: [
    "indigo amour story",
    "traditional dyeing heritage",
    "artisan empowerment",
    "heritage crafts revival",
    "natural dyeing tradition",
    "sustainable fashion story",
    "indigo dyeing history",
    "traditional textile arts",
    "artisan community",
    "heritage preservation",
    "sustainable fashion journey",
    "traditional crafts revival",
    "indigo culture",
    "artisan collaboration",
    "heritage textile techniques",
    "sustainable fashion mission",
    "traditional dyeing process",
    "artisan empowerment story",
    "heritage craft revival",
    "sustainable fashion heritage"
  ],
};


export default function OurStory() {
    return (
        <div className="relative overflow-hidden">
            <AnimatedNavbar />
            <OurStoryHeroSection />
            <DeclineOfTradition />
            <RevivingALegacy />
            <DyeingProcess />
            <EmpoweringLocalArtisans />
            <Footer />
        </div>
    );
}
