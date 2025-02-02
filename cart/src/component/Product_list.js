import React from 'react';
import Product from './Product';

export default function Productlist(props) {
  const { products, incrementQuantity, decrementQuantity } = props;

  return (
    <div>
      {products.map((product, index) => (
        <Product
          product={product}
          key={index}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          index={index}
        />
      ))}
    </div>
  );
}
