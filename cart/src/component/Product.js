import React from 'react';

export default function Product(props) {
  const { product, incrementQuantity, decrementQuantity, index } = props;

  return (
    <div className="row">
      <div className="col-5">
        <h2>
          {product.name}{' '}
          <span className="badge text-bg-secondary">₹{product.price}</span>
        </h2>
      </div>

      <div className="col-3">
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => decrementQuantity(index)}
          >
            -
          </button>
          <button type="button" className="btn btn-primary">
            {product.quantity}
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => incrementQuantity(index)}
          >
            +
          </button>
        </div>
      </div>

      <div className="col-4">
        Total: ₹{product.quantity * product.price}
      </div>
    </div>
  );
}
