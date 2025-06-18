# User Details System

This document explains how the user details collection and storage system works in the Indigo Amour e-commerce website.

## Overview

The system collects user shipping information during the purchase process and stores it in localStorage for future reference. No authentication is required - this is a simple guest checkout system.

## Features

- **User Details Collection**: Collects name, email, phone, address, city, state, and pincode
- **Form Validation**: Validates all required fields with proper error messages
- **localStorage Storage**: Automatically saves user details to browser localStorage
- **Auto-fill**: Pre-fills form with previously saved details
- **Reactive Updates**: Components automatically update when user details change
- **No Authentication**: Simple guest checkout without user accounts

## Components

### 1. UserDetailsForm (`/components/user-details-form.tsx`)
- Main form component for collecting user information
- Includes validation for all fields
- Auto-saves to localStorage on successful submission
- Pre-fills with existing data if available

### 2. UserDetailsDisplay (`/components/user-details-display.tsx`)
- Displays saved user details in a readable format
- Shows in cart page when user details are available
- Includes edit functionality

### 3. Checkout Page (`/app/(routes)/(shopping)/checkout/page.tsx`)
- Dedicated page for collecting user details
- Redirects to cart after successful submission

## Utilities

### 1. User Details Library (`/lib/user-details.ts`)
- `saveUserDetails()`: Saves user details to localStorage
- `getUserDetails()`: Retrieves user details from localStorage
- `clearUserDetails()`: Removes user details from localStorage
- `hasUserDetails()`: Checks if user details exist

### 2. User Details Hook (`/hooks/use-user-details.ts`)
- React hook for managing user details state
- Provides reactive updates across components
- Handles localStorage synchronization

## User Flow

1. **Add to Cart**: User adds products to cart
2. **View Cart**: User views cart page
3. **Add Shipping Info**: If no user details exist, user clicks "Add Shipping Information"
4. **Fill Form**: User fills out shipping information form
5. **Save Details**: Form validates and saves to localStorage
6. **Return to Cart**: User returns to cart with details displayed
7. **Proceed to Payment**: User can now proceed to payment with pre-filled details

## Data Structure

```typescript
interface UserDetails {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
}
```

## Validation Rules

- **Name**: Required, non-empty string
- **Email**: Required, valid email format
- **Phone**: Required, 10-digit number
- **Address**: Required, non-empty string
- **City**: Required, non-empty string
- **State**: Required, non-empty string
- **Pincode**: Required, 6-digit number

## Integration with Payment

User details are automatically included in the payment request:
- Name and email are pre-filled in Razorpay
- Phone number is included in the order
- Full address is formatted and sent to the backend

## Security Considerations

- Data is stored locally in the browser
- No sensitive payment information is stored
- User can clear data by clearing browser localStorage
- No server-side storage of user details

## Future Enhancements

- Add option to save multiple addresses
- Implement address verification
- Add shipping cost calculation based on location
- Integrate with address autocomplete services 