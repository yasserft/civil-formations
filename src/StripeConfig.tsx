import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

// Replace with your actual publishable key
const stripePromise = loadStripe('your-publishable-key-here');

const StripeConfig: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Elements stripe={stripePromise}>{children}</Elements>;
};

export default StripeConfig;
