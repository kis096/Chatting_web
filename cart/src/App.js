import React, { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Navbar from './component/Navbar';
import Productlist from './component/Product_list';
import Footer from './component/Footer';

const stripePromise = loadStripe('YOUR_PUBLISHABLE_KEY'); // Replace with your Stripe Publishable Key

function App() {
  const initialProducts = [
    { price: 9999, name: 'iPhone 16 Pro', quantity: 0 },
    { price: 8999, name: 'iPhone 15 Pro', quantity: 0 },
  ];

  const [products, setProducts] = useState(initialProducts);

  const totalAmount = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  const clearCart = () => {
    const resetProducts = products.map((product) => ({
      ...product,
      quantity: 0,
    }));
    setProducts(resetProducts);
  };

  const incrementQuantity = (index) => {
    const updatedProducts = [...products];
    updatedProducts[index].quantity++;
    setProducts(updatedProducts);
  };

  const decrementQuantity = (index) => {
    const updatedProducts = [...products];
    if (updatedProducts[index].quantity > 0) {
      updatedProducts[index].quantity--;
    }
    setProducts(updatedProducts);
  };

  return (
    <Elements stripe={stripePromise}>
      <div className="App">
        <Navbar />
        <main className="container mt-5">
          <Productlist
            products={products}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
          />
        </main>
        <Footer
          totalAmount={totalAmount}
          clearCart={clearCart}
        />
      </div>
    </Elements>
  );
}

export default App;
