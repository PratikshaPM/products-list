import React from "react";
import { ProductType } from "./type";

interface ProductCardType {
  product: ProductType
}

const ProductCard: React.FC<ProductCardType> = ({ product }) => {
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
