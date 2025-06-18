"use client";

import { useState } from "react";
import { UserDetails } from "@/types";
import UserDetailsForm from "@/components/user-details-form";
import { getUserDetails } from "@/lib/user-details";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

const CheckoutPage = () => {
  const [showUserForm, setShowUserForm] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const router = useRouter();

  const handleUserDetailsSubmit = (userDetails: UserDetails) => {
    setShowUserForm(false);
    // The user details are already saved in localStorage by the form component
    // Now we can proceed to payment or redirect to cart with user details
    toast.success("Shipping information saved!");
    router.push("/cart");
  };

  const handleCancel = () => {
    router.push("/cart");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
          <p className="text-gray-600 mt-2">
            Please provide your shipping information to continue
          </p>
        </div>

        {showUserForm && (
          <UserDetailsForm
            onSubmit={handleUserDetailsSubmit}
            onCancel={handleCancel}
            isLoading={isProcessing}
          />
        )}
      </div>
    </div>
  );
};

export default CheckoutPage; 