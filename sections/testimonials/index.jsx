"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Testimonials = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".testimonial"),
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 1 }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#e1e1e1] py-10 flex flex-col items-center"
    >
      <h2 className="flex gap-3 md:gap-5 text-[#1a1a1a] items-center justify-center text-center text-2xl md:text-3xl font-space-grotesk font-bold md:mt-2  md:mb-8">
        <span className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#1a1a1a] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
          What Our Customer Say
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl px-5">
        {[
          {
            img: "/images/customer-reveiw-1.jpg",
            name: "Smita Vasant",
            job: "Fashion Buyer based in LA, US.",
            review: `"I’ve been a fan of Indigo Amour for quite a while - not only do I love that it’s natural, non-toxic, good for the environment and people, I also love the contemporary styling and cuts which are very important to me!I’ve been a fan of Indigo Amour for quite a while - not only do I love that it’s natural, non-toxic, good for the environment and people, I also love the contemporary styling and cuts which are very important to me!."`,
          },
          {
            img: "/images/customer-reveiw-2.jpg",
            name: "Jyotsna Raghunathan",
            job: "Professor in Communication Design in New Delhi.",
            review: `"Thoughtfully designed jacket in a perfect mint green. Loved the design and the fit! Thank you Indigo Amour!"`,
          },
          {
            img: "/images/customer-reveiw-3.jpg",
            name: "Neha Sharma, Dubai",
            review: `"Shop Indigo Amour for standout, handcrafted gear that feels as good as it looks. Super-soft, skin-friendly fabric. Flawless fit. Eye-catching design—all at a price that won’t make you blink.`,
          },
        ].map((testimonial, i) => (
          <div
            key={testimonial.img}
            className="group cursor-pointer testimonial hover:bg-[#005689] hover:text-neutral-300 duration-200 transition-all bg-white shadow-lg rounded-lg p-6 "
          >
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 rounded-full border overflow-hidden">
                <img
                  className="object-cover"
                  src={testimonial.img}
                  alt="Customer 1"
                />
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-black group-hover:text-neutral-50 text-lg">
                  {testimonial.name}
                </h3>
                <p className="text-sm group-hover:text-neutral-200 text-gray-500">
                  {testimonial?.job}
                </p>
              </div>
            </div>
            <p className="text-gray-600 group-hover:text-neutral-200 text-sm">
              {testimonial.review}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
