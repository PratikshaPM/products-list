import React, { useEffect, useState } from "react";
import ProductCard from "./ProductGrid";
import ProductTable from "./ProductTable";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [view, setView] = useState("grid");
  const [sortOrder, setSortOrder] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const handleSort = (order) => {
    const sorted = [...products].sort((a, b) =>
      order === "asc" ? a.price - b.price : b.price - a.price
    );
    setSortOrder(order);
    setProducts(sorted);
  };

  return (
    <div className="product-list">
      <h2>Product List</h2>

      <div className="controls">
        <button onClick={() => setView("grid")}>Grid View</button>
        <button onClick={() => setView("table")}>Table View</button>

        <button onClick={() => handleSort("asc")}>Sort: Low to High</button>
        <button onClick={() => handleSort("desc")}>Sort: High to Low</button>
      </div>

      {view === "grid" ? (
        <div className="grid-container">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <ProductTable products={products} />
      )}
    </div>
  );
}

export default ProductList;
