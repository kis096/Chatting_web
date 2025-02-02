import React from 'react';
import { useStripe } from '@stripe/react-stripe-js';

export default function Footer(props) {
  const stripe = useStripe();

  const handlePayNow = async () => {
    try {
      // API call to create a Stripe checkout session
      const response = await fetch('/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ totalAmount: props.totalAmount }),
      });

      if (!response.ok) {
        console.error('Failed to create session:', response.statusText);
        alert('Something went wrong!');
        return;
      }

      const session = await response.json(); // Parse JSON response
      console.log('Session ID:', session.id);

      // Redirect to Stripe Checkout
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        console.error('Stripe Checkout Error:', result.error.message);
        alert(result.error.message);
      }
    } catch (error) {
      console.error('Error during payment:', error);
      alert('Payment failed! Please try again.');
    }
  };

  return (
    <div className="row align-items-center mt-4 fixed-bottom">
      <button className="btn btn-danger col-2" onClick={props.clearCart}>
        Clear Cart
      </button>
      <div className="col-8 text-center">
        <h3>Total Amount: ₹{props.totalAmount}</h3>
      </div>
      <button className="btn btn-primary col-2" onClick={handlePayNow}>
        Pay Now
      </button>
    </div>
  );
}
