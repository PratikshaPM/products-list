import React from "react";
import { ProductType } from "./type";

interface ProductTableType {
  products: ProductType[]
}

const ProductTable: React.FC<ProductTableType> = ({ products }) => {
  return (
    <table className="product-table">
      <thead>
        <tr>
          <th>Image</th>
          <th>Title</th>
          <th>Price</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        {products.map((prod) => (
          <tr key={prod.id}>
            <td>
              <img src={prod.image} alt={prod.title} width="50" />
            </td>
            <td>{prod.title}</td>
            <td>${prod.price}</td>
            <td>{prod.rating.rate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProductTable;
