import { UserDetails } from "@/types";

const USER_DETAILS_KEY = "indigo-amour-user-details";

export const saveUserDetails = (userDetails: UserDetails): void => {
  if (typeof window !== "undefined") {
    localStorage.setItem(USER_DETAILS_KEY, JSON.stringify(userDetails));
  }
};

export const getUserDetails = (): UserDetails | null => {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem(USER_DETAILS_KEY);
    if (stored) {
      try {
        return JSON.parse(stored) as UserDetails;
      } catch (error) {
        console.error("Error parsing user details from localStorage:", error);
        return null;
      }
    }
  }
  return null;
};

export const clearUserDetails = (): void => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(USER_DETAILS_KEY);
  }
};

export const hasUserDetails = (): boolean => {
  return getUserDetails() !== null;
}; 