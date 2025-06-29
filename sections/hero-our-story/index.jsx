"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Inknut_Antiqua } from "next/font/google";

const hero_font = Inknut_Antiqua({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

const OurStoryHeroSection = () => {
  const headingRef1 = useRef(null);
  const headingRef2 = useRef(null);

  useEffect(() => {
    const spans1 = headingRef1.current.querySelectorAll("span");

    gsap.set([spans1], { opacity: 0, y: 50 });

    gsap.to([spans1], {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.2,
      delay: 0.5,
    });
  }, []);

  return (
    <div className="relative flex items-start justify-start flex-col md:h-[40vh] h-[30vh] bg-[#1a1a1a] text-[#e1e1e1] ">
      <div className="w-[96vw] md:w-[98.9vw] h-[100%] rounded-2xl m-2 overflow-hidden">
        <video autoPlay muted loop className="opacity-25 w-full object-fill" src="/videos/sheep-grazing.mp4" />
      </div>

      <h3
        ref={headingRef1}
        className={`hero-heading overflow-hidden absolute ${hero_font.className} text-xl md:text-4xl md:top-[50%] top-[60%] left-[40%] md:left-[50%] -translate-x-1/2 -translate-y-1/2 leading-loose`}
      >
        <span className="md:inline-block">A Story of </span>{" "}
        <span className="md:inline-block ">Sustainable Fashion</span>{" "}
        <p className="text-xs md:text-sm font-light text-neutral-400 text-center hidden md:block">Reviving Heritage Through Gaddi Wool and Natural Dyes</p>
      </h3>

    </div>
  );
};

export default OurStoryHeroSection;
