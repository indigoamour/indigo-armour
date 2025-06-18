"use client";

import { useState, useEffect } from "react";
import { UserDetails } from "@/types";
import { Input } from "@/components/ui/input";
import Button from "@/components/ui/button";
import { useUserDetails } from "@/hooks/use-user-details";

interface UserDetailsFormProps {
  onSubmit: (userDetails: UserDetails) => void;
  onCancel?: () => void;
  isLoading?: boolean;
}

const UserDetailsForm = ({ onSubmit, onCancel, isLoading }: UserDetailsFormProps) => {
  const { userDetails: savedDetails, updateUserDetails } = useUserDetails();
  const [formData, setFormData] = useState<UserDetails>({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [errors, setErrors] = useState<Partial<UserDetails>>({});

  useEffect(() => {
    // Load existing user details if available
    if (savedDetails) {
      setFormData(savedDetails);
    }
  }, [savedDetails]);

  const validateForm = (): boolean => {
    const newErrors: Partial<UserDetails> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    if (!formData.state.trim()) {
      newErrors.state = "State is required";
    }

    if (!formData.pincode.trim()) {
      newErrors.pincode = "Pincode is required";
    } else if (!/^\d{6}$/.test(formData.pincode)) {
      newErrors.pincode = "Please enter a valid 6-digit pincode";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      updateUserDetails(formData);
      onSubmit(formData);
    }
  };

  const handleInputChange = (field: keyof UserDetails, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        Shipping Information
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Full Name"
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            placeholder="Enter your full name"
            error={errors.name}
            required
          />
          
          <Input
            label="Email Address"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            placeholder="Enter your email address"
            error={errors.email}
            required
          />
        </div>

        <Input
          label="Phone Number"
          type="tel"
          value={formData.phone}
          onChange={(e) => handleInputChange("phone", e.target.value)}
          placeholder="Enter your phone number"
          error={errors.phone}
          required
        />

        <Input
          label="Address"
          type="text"
          value={formData.address}
          onChange={(e) => handleInputChange("address", e.target.value)}
          placeholder="Enter your complete address"
          error={errors.address}
          required
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Input
            label="City"
            type="text"
            value={formData.city}
            onChange={(e) => handleInputChange("city", e.target.value)}
            placeholder="Enter your city"
            error={errors.city}
            required
          />
          
          <Input
            label="State"
            type="text"
            value={formData.state}
            onChange={(e) => handleInputChange("state", e.target.value)}
            placeholder="Enter your state"
            error={errors.state}
            required
          />
          
          <Input
            label="Pincode"
            type="text"
            value={formData.pincode}
            onChange={(e) => handleInputChange("pincode", e.target.value)}
            placeholder="Enter pincode"
            error={errors.pincode}
            required
          />
        </div>

        <div className="flex gap-4 pt-4">
          <Button
            type="submit"
            disabled={isLoading}
            className="flex-1"
          >
            {isLoading ? "Processing..." : "Continue to Payment"}
          </Button>
          
          {onCancel && (
            <Button
              type="button"
              variant="outline"
              onClick={onCancel}
              disabled={isLoading}
            >
              Cancel
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default UserDetailsForm; 