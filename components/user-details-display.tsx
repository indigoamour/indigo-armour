"use client";

import { UserDetails } from "@/types";
import Button from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useUserDetails } from "@/hooks/use-user-details";

interface UserDetailsDisplayProps {
  onEdit?: () => void;
}

const UserDetailsDisplay = ({ onEdit }: UserDetailsDisplayProps) => {
  const router = useRouter();
  const { userDetails } = useUserDetails();

  if (!userDetails) {
    return null;
  }

  const handleEdit = () => {
    if (onEdit) {
      onEdit();
    } else {
      router.push("/checkout");
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">
          Shipping Information
        </h3>
        <Button
          variant="ghost"
          onClick={handleEdit}
          className="text-sm text-blue-600 hover:text-blue-800"
        >
          Edit
        </Button>
      </div>
      
      <div className="space-y-2 text-sm text-gray-700">
        <div className="flex justify-between">
          <span className="font-medium">Name:</span>
          <span>{userDetails.name}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Email:</span>
          <span>{userDetails.email}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Phone:</span>
          <span>{userDetails.phone}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Address:</span>
          <span className="text-right max-w-xs">
            {userDetails.address}, {userDetails.city}, {userDetails.state} - {userDetails.pincode}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsDisplay; 