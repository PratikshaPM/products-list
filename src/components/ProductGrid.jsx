// components/ProductCard.js
import React from "react";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>
        <strong>Price:</strong> ${product.price}
      </p>
      <p>
        <strong>Rating:</strong> {product.rating.rate} ⭐
      </p>
    </div>
  );
}

export default ProductCard;
