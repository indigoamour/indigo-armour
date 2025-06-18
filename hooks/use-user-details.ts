import { useState, useEffect } from "react";
import { UserDetails } from "@/types";
import { getUserDetails, saveUserDetails, clearUserDetails, hasUserDetails } from "@/lib/user-details";

export const useUserDetails = () => {
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load user details on mount
    const details = getUserDetails();
    setUserDetails(details);
    setIsLoading(false);

    // Listen for storage changes (in case localStorage is modified from another tab)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "indigo-amour-user-details") {
        if (e.newValue) {
          try {
            setUserDetails(JSON.parse(e.newValue));
          } catch (error) {
            console.error("Error parsing user details from storage event:", error);
            setUserDetails(null);
          }
        } else {
          setUserDetails(null);
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const updateUserDetails = (details: UserDetails) => {
    saveUserDetails(details);
    setUserDetails(details);
  };

  const removeUserDetails = () => {
    clearUserDetails();
    setUserDetails(null);
  };

  const checkHasUserDetails = () => {
    return hasUserDetails();
  };

  return {
    userDetails,
    isLoading,
    updateUserDetails,
    removeUserDetails,
    hasUserDetails: checkHasUserDetails,
  };
}; 