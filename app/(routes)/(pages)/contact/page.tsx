import React from "react";
import Footer from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Indigo Amour",
  description:
    "Get in touch with Indigo Amour for questions about our sustainable hand-dyed fashion, orders, or collaborations. We'd love to hear from you.",
  keywords: [
    "contact indigo amour",
    "sustainable fashion contact",
    "hand-dyed clothing contact",
    "eco-friendly fashion contact",
    "natural dye clothing contact",
    "sustainable fashion support",
    "handcrafted clothing contact",
    "indigo dyed clothing contact",
    "artisan fashion contact",
    "sustainable apparel contact",
    "hand-dyed dresses contact",
    "eco-friendly clothing contact",
    "natural indigo clothing contact",
    "sustainable fashion help",
    "handcrafted fashion contact",
    "traditional dyeing clothing contact",
    "artisan made clothing contact",
    "eco-conscious fashion contact",
    "sustainable textile contact",
    "hand-dyed fashion contact"
  ],
};

const page = () => {
  return (
    <div className="relative overflow-hidden">
      <section className="relative bg-neutral-700 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl text-neutral-100 font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-neutral-300 text-lg">
            We'd love to hear from you! Feel free to reach out with any
            questions or concerns.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Contact Information</h2>

          <div className="space-y-4 text-gray-700">
            <p><strong>Name:</strong> Seema Singh</p>
            <p>
              <strong>Address:</strong> 3792, Ground Floor, Sector 23, Gurugram - 122017
            </p>
            <p><strong>Mobile:</strong> 9999530162</p>
            <p><strong>Email:</strong> indigoamour.dev@gmail.com</p>
            <p><strong>Business Hours:</strong> Monday to Saturday, 10:00 AM – 6:00 PM</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default page;
