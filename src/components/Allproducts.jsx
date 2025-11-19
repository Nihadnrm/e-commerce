import React, { useState } from "react";
import { products } from "../assets/dummydata";
import { Link, useNavigate } from "react-router-dom";

const Allproducts = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [price, setPrice] = useState("All");

  const nav = useNavigate();

  // categories
  const categories = ["All", ...new Set(products.map((p) => p.category))];

  // Filtering
  const filteredProducts = products.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      category === "All" ? true : item.category === category;
    const matchesPrice =
      price === "All"
        ? true
        : price === "low"
        ? item.price > 1000
        : price === "mid"
        ? item.price >= 300 && item.price <= 900
        : item.price < 100;

    return matchesSearch && matchesCategory && matchesPrice;
  });

  const handleOrder = (item) => {
    localStorage.setItem("product", JSON.stringify(item));
    nav("/checkout");
  };
  const handlecart=()=>{
    alert("item added to the cart")
  }

  return (
    <div className="py-12 px-4 sm:px-6 md:px-14 lg:px-20">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        All Products
      </h1>

      {/*search*/}
      <div
        className="backdrop-blur-xl bg-white/70 shadow-xl border rounded-2xl 
                   p-4 md:p-6 mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
      >
       
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 
                       focus:ring-2 focus:ring-indigo-500 outline-none bg-white shadow-sm"
          />
          <span className="absolute left-4 top-3.5 text-gray-500 text-xl">
            🔍
          </span>
        </div>

        {/* category filter */}
        <div className="relative w-full">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300
                       focus:ring-2 focus:ring-indigo-500 outline-none bg-white shadow-sm"
          >
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <span className="absolute left-3 top-3.5 text-gray-500 text-lg">
            📂
          </span>
        </div>

        {/* price filter*/}
        <div className="relative w-full">
          <select
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 
                       focus:ring-2 focus:ring-indigo-500 outline-none bg-white shadow-sm"
          >
            <option value="All">All Prices</option>
            <option value="low">Above ₹1000</option>
            <option value="mid">₹300 - ₹900</option>
            <option value="high">Below ₹100</option>
          </select>
          <span className="absolute left-3 top-3.5 text-gray-500 text-lg">
            💰
          </span>
        </div>

        {/* reset button*/}
        <button
          onClick={() => {
            setSearch("");
            setCategory("All");
            setPrice("All");
          }}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-gray-200 to-gray-300
                     hover:from-gray-300 hover:to-gray-400 text-gray-800
                     font-semibold shadow-md w-full"
        >
          Reset
        </button>
      </div>

      {/* products */}

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition"
            >
              
              <Link to={`/product/${index}`}>
                <div className="w-full h-36 sm:h-44 md:h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-t-xl"
                  />
                </div>
              </Link>

             
              <div className="p-3 sm:p-4">
                <h2 className="font-bold text-sm sm:text-lg">{item.name}</h2>
                <p className="font-extrabold mt-1 text-indigo-600">
                  ₹{item.price}
                </p>
                <p className="font-semibold mt-1 text-gray-600 text-sm">
                  ⭐ Rating: {item.rating}
                </p>

          
                <div className="mt-3 flex flex-col sm:flex-row gap-2">
                  <button onClick={handlecart} className="w-full sm:w-1/2 bg-indigo-400 text-white py-2 rounded-lg hover:bg-indigo-600 duration-300">
                    Add to Cart
                  </button>

                  <button
                    onClick={() => handleOrder(item)}
                    className="w-full sm:w-1/2 bg-green-400 text-white py-2 rounded-lg hover:bg-green-600 duration-300"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full text-lg">
            No products found
          </p>
        )}
      </div>
    </div>
  );
};

export default Allproducts;
