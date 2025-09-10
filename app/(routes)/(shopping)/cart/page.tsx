"use client";

import Container from "@/components/ui/container";
import NoResults from "@/components/ui/no-results";
import useCart from "@/hooks/use-cart";
import { useEffect, useState } from "react";
import CartItem from "./components/cart-item";
import Summary from "./components/summary";
import UserDetailsDisplay from "@/components/user-details-display";
import { useUserDetails } from "@/hooks/use-user-details";

const CartPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { hasUserDetails } = useUserDetails();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cart = useCart();

  if (!isMounted) {
    return null;
  }
  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
          <div className="lg:col-span-8">
            {cart.items.length === 0 && (
              <NoResults message="No Item added in the Cart" />
            )}
          </div>
          
          {cart.items.length > 0 && (
            <>
              {/* Show user details if available */}
              {hasUserDetails() && <UserDetailsDisplay />}
              
              <ul className="my-12">
                {cart.items.map((item) => (
                  <CartItem key={item.id} data={item} />
                ))}
              </ul>
              
              <Summary />
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
