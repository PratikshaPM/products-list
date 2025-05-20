import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1>Welcome to the Store</h1>
      <Link to="/product-list" className="nav-link">
        Go to Product List
      </Link>
    </div>
  );
}

export default Home;
