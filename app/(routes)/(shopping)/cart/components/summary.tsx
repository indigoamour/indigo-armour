"use client";

import Button from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useUserDetails } from "@/hooks/use-user-details";
import { UserDetails } from "@/types";

const Summary = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);
  const [isLoading, setIsLoading] = useState(false);
  const { userDetails, hasUserDetails } = useUserDetails();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  const shippingFee = totalPrice < 5000 ? 200 : 0;
  const finalTotal = totalPrice + shippingFee;

  const storeId = "your-store-id-here"; // pass dynamically if needed

  const handleCheckout = async () => {
    // Check if user details exist
    if (!hasUserDetails()) {
      toast.error("Please provide your shipping information first");
      router.push("/checkout");
      return;
    }

    if (!userDetails) {
      toast.error("Please provide your shipping information first");
      router.push("/checkout");
      return;
    }

    setIsLoading(true);

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
        {
          items: items.map((item) => ({
            productId: item.id,
            quantity: 1, // Update if cart supports multiple quantities
          })),
          phone: userDetails.phone,
          address: `${userDetails.address}, ${userDetails.city}, ${userDetails.state} - ${userDetails.pincode}`,
          customerName: userDetails.name,
          customerEmail: userDetails.email,
          shippingFee: shippingFee,
          totalAmount: finalTotal,
        },
        { headers: { "Content-Type": "application/json" } }
      );

      const { razorpayOrder, orderId } = res.data;

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
        amount: razorpayOrder.amount,
        currency: razorpayOrder.currency,
        name: "Indigo Amour",
        description: "Thank you for shopping with us!",
        order_id: razorpayOrder.id,
        handler: async function (response: any) {
          console.log("Razorpay Response:", response);

          const verifyRes = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/verify-payment`,
            {
              razorpayOrderId: response.razorpay_order_id,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpaySignature: response.razorpay_signature,
              orderId: orderId,
            }
          );

          if (verifyRes.status === 200) {
            toast.success("Payment Successful 🎉");
            removeAll(); // Clear cart
            router.push("/shop"); // Redirect to home page
          } else {
            toast.error("Payment verification failed");
          }
        },
        prefill: {
          name: userDetails.name,
          email: userDetails.email,
          contact: userDetails.phone,
        },
        theme: {
          color: "#1a56db",
        },
      };

      const razorpay = new (window as any).Razorpay(options);
      razorpay.open();
    } catch (error: any) {
      console.error("Checkout error:", error);
      toast.error("Something went wrong during checkout.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="text-base text-gray-900">Subtotal</div>
          <Currency value={totalPrice} />
        </div>
        <div className="flex items-center justify-between">
          <div className="text-base text-gray-900">Shipping</div>
          {shippingFee === 0 ? (
            <span className="text-green-600">Free</span>
          ) : (
            <Currency value={shippingFee} />
          )}
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order Total</div>
          <Currency value={finalTotal} />
        </div>
      </div>
      
      {hasUserDetails() ? (
        <Button 
          className="w-full mt-6" 
          onClick={handleCheckout}
          disabled={isLoading}
        >
          {isLoading ? "Processing..." : "Proceed to Payment"}
        </Button>
      ) : (
        <Button 
          className="w-full mt-6" 
          onClick={() => router.push("/checkout")}
        >
          Add Shipping Information
        </Button>
      )}
    </div>
  );
};

export default Summary;
