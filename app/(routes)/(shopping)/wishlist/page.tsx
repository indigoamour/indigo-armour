"use client";

import Container from "@/components/ui/container";
import NoResults from "@/components/ui/no-results";
import { useEffect, useState } from "react";
import WishlistItem from "./components/wishlist-item";
import useWishlist from "@/hooks/use-wishlist";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wishlist - Indigo Amour",
  description:
    "Save your favorite sustainable hand-dyed fashion pieces to your wishlist. Keep track of eco-friendly clothing you love.",
  keywords: [
    "wishlist",
    "sustainable fashion wishlist",
    "hand-dyed clothing wishlist",
    "eco-friendly fashion wishlist",
    "natural dye clothing wishlist",
    "sustainable fashion favorites",
    "handcrafted clothing wishlist",
    "indigo dyed clothing wishlist",
    "artisan fashion wishlist",
    "sustainable apparel wishlist",
    "hand-dyed dresses wishlist",
    "eco-friendly clothing wishlist",
    "natural indigo clothing wishlist",
    "sustainable fashion saved",
    "handcrafted fashion wishlist",
    "traditional dyeing clothing wishlist",
    "artisan made clothing wishlist",
    "eco-conscious fashion wishlist",
    "sustainable textile wishlist",
    "hand-dyed fashion wishlist"
  ],
};

const CartPage = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const wishlist = useWishlist();

  if (!isMounted) {
    return null;
  }
  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black">Wishlist</h1>
          <div className="lg:col-span-8">
            {wishlist.items.length === 0 && (
              <NoResults message="No Item added in the wishlist" />
            )}
          </div>
          <ul className="my-12">
            {wishlist.items.map((item) => (
              <WishlistItem key={item?.id} data={item} />
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
