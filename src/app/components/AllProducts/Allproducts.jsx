'use client'

import { useEffect, useState } from "react";
import "./AllProducts.css";
import Product from "../Product/Product";
import Filters from "../Filters/Filters";
import Search from "../Search/Search"

const Allproducts = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // Search state

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setFilteredProducts(data.products); // Initialize filteredProducts with all products
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    filterProducts();
  }, [selectedBrand, selectedRating, selectedPrice, searchQuery]);

  const filterProducts = () => {
    let filtered = products;

    if (selectedBrand) {
      filtered = filtered.filter(product => product.brand === selectedBrand);
    }

    if (selectedRating) {
      filtered = filtered.filter(product => product.rating >= selectedRating);
    }

    if (selectedPrice) {
      filtered = filtered.filter(product => product.price <= selectedPrice);
    }

    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sorting
    
    // switch (sortOrder) {
    //   case "title":
    //     filtered.sort((a, b) => a.title.localeCompare(b.title));
    //     break;
    //   case "price_asc":
    //     filtered.sort((a, b) => a.price - b.price);
    //     break;
    //   case "price_desc":
    //     filtered.sort((a, b) => b.price - a.price);
    //     break;
    //   case "rating":
    //     filtered.sort((a, b) => b.rating - a.rating);
    //     break;
    //   default:
    //     break;
    // }

    setFilteredProducts(filtered);
  };

  const resetFilters = () => {
    setSelectedBrand(null);
    setSelectedRating(null);
    setSelectedPrice(null);
    setSearchQuery("");
    setFilteredProducts(products);
  };

  return (
    <div className="products-container">
      <h1>Products</h1>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <Filters
        products={products}
        selectedBrand={selectedBrand}
        setSelectedBrand={setSelectedBrand}
        selectedRating={selectedRating}
        setSelectedRating={setSelectedRating}
        selectedPrice={selectedPrice}
        setSelectedPrice={setSelectedPrice}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        resetFilters={resetFilters}
        // sortOrder={sortOrder}
        // setSortOrder={setSortOrder}
      />
      <ul className="product-list">
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default Allproducts;
