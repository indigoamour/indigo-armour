"use client";

import { Heart, ShoppingBag, MenuIcon, X, ArrowDownIcon } from "lucide-react";
import Button from "./ui/button";
import { useEffect, useState, useRef } from "react";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";
import Link from "next/link";
import gsap from "gsap";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "https://indigoamour.blog" },
  { label: "Our Story", href: "/story" },
  { label: "Contact", href: "/contact" },
];

const NavActions = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);
  const itemRefs = useRef([]);
  const menuRef = useRef(null);
  const menuAnimationRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();
  const cart = useCart();

  // Menu hover animations
  useEffect(() => {
    itemRefs.current.forEach((itemRef) => {
      if (!itemRef) return;

      const mainText = itemRef.querySelector(".main-text");
      const hoverText = itemRef.querySelector(".hover-text");

      if (mainText && hoverText) {
        gsap.set([mainText, hoverText], {
          position: "absolute",
          width: "100%",
          left: 0,
        });
        gsap.set(hoverText, { y: "100%", opacity: 0 });
      }

      itemRef.addEventListener("mouseenter", () => {
        if (mainText && hoverText) {
          gsap
            .timeline()
            .to(mainText, {
              y: "-100%",
              opacity: 0,
              duration: 0.3,
              ease: "power2.in",
            })
            .to(
              hoverText,
              {
                y: "0%",
                opacity: 1,
                duration: 0.3,
                ease: "power2.out",
              },
              "-=0.2"
            );
        }
      });

      itemRef.addEventListener("mouseleave", () => {
        if (mainText && hoverText) {
          gsap
            .timeline()
            .to(hoverText, {
              y: "100%",
              opacity: 0,
              duration: 0.3,
              ease: "power2.in",
            })
            .to(
              mainText,
              {
                y: "0%",
                opacity: 1,
                duration: 0.3,
                ease: "power2.out",
              },
              "-=0.2"
            );
        }
      });
    });
  }, []);

  // Menu slide animation
  useEffect(() => {
    if (menuRef.current && isMounted) {
      menuAnimationRef.current = gsap.timeline({ paused: true });

      // Set initial position off-screen
      gsap.set(menuRef.current, { x: "100%" });

      // Create slide-in animation
      menuAnimationRef.current.to(menuRef.current, {
        x: "0%",
        duration: 0.6,
        ease: "power2.inOut",
      });

      // Add menu items animation
      if (itemRefs.current.length > 0) {
        menuAnimationRef.current.fromTo(
          itemRefs.current,
          {
            x: 50,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.4,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.3"
        );
      }
    }
  }, [isMounted]);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);

    if (menuAnimationRef.current) {
      if (isMenuActive) {
        // Close menu
        menuAnimationRef.current.reverse();
      } else {
        // Open menu
        menuAnimationRef.current.play();
      }
    } else {
      // Fallback if GSAP animation isn't working
      console.log("Animation ref not found, using CSS fallback");
      if (menuRef.current) {
        if (isMenuActive) {
          menuRef.current.style.transform = "translateX(100%)";
        } else {
          menuRef.current.style.transform = "translateX(0%)";
        }
      }
    }
  };

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <div className="flex-1 ml-auto flex items-center gap-x-1 justify-end">
        <Button
          onClick={() => router.push("/cart")}
          className="relative flex items-center rounded-full bg-transparent px-3 py-2"
        >
          <ShoppingBag size={24} color="black" />
          <span className="absolute -top-1 bg-[#EE6470] text-white w-5 h-5 rounded-full right-1 ml-2 text-sm font-medium font-white">
            {cart.items.length}
          </span>
        </Button>
        
        <Button
          onClick={() => router.push("/wishlist")}
          className="flex items-center bg-transparent rounded-full px-3 py-2"
        >
          <Heart size={24} color="#EE6470" />
        </Button>
        
        <Button
          onClick={toggleMenu}
          className="flex items-center bg-transparent rounded-full px-3 py-2 hover:opacity-75 duration-300"
        >
          {isMenuActive ? (
            <X size={24} color="#EE6470" />
          ) : (
            <MenuIcon size={24} color="#EE6470" />
          )}
        </Button>
      </div>

      {/* Menu Overlay */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 w-[80vw] md:w-[30vw] px-6 py-16 bg-[#e1e1e1] h-screen flex flex-1 items-start justify-start flex-col space-y-6 z-[9999] transition-transform duration-600 ease-in-out ${
          isMenuActive ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 p-2 hover:opacity-75 duration-300 bg-transparent rounded-full"
        >
          <X size={24} color="#EE6470" />
        </button>

        {menuItems.map((item, index) => {
          const isExternal = item.href.startsWith("http");

          return isExternal ? (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              ref={(el) => (itemRefs.current[index] = el)}
              className="relative h-8 w-full border-b border-b-neutral-500 md:px-2 md:py-4 overflow-hidden cursor-pointer"
            >
              <h4 className="main-text flex w-full items-center justify-between text-xl text-neutral-700 uppercase absolute top-0 left-0">
                {item.label}
                <span className="-rotate-90">
                  <ArrowDownIcon />
                </span>
              </h4>
              <h4 className="hover-text flex w-full items-center justify-between text-xl uppercase text-[#ED6370] absolute top-0 left-0">
                {item.label}
                <span className="-rotate-90">
                  <ArrowDownIcon />
                </span>
              </h4>
            </a>
          ) : (
            <Link
              key={item.label}
              href={item.href}
              ref={(el) => (itemRefs.current[index] = el)}
              className="relative h-8 w-full border-b border-b-neutral-500 md:px-2 md:py-4 overflow-hidden cursor-pointer"
            >
              <h4 className="main-text flex w-full items-center justify-between text-xl text-neutral-700 uppercase absolute top-0 left-0">
                {item.label}
                <span className="-rotate-90">
                  <ArrowDownIcon />
                </span>
              </h4>
              <h4 className="hover-text flex w-full items-center justify-between text-xl uppercase text-[#ED6370] absolute top-0 left-0">
                {item.label}
                <span className="-rotate-90">
                  <ArrowDownIcon />
                </span>
              </h4>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default NavActions;