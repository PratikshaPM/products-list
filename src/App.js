// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/product-list" element={<ProductList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
