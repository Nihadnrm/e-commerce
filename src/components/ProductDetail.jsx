import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../assets/dummydata";
import { useNavigate } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products[id];
  const nav = useNavigate();

  if (!product) {
    return (
      <div className="text-center text-gray-500 mt-20 text-xl">
        Product not found
      </div>
    );
  }

  const handleOrder = () => {
    localStorage.setItem("product", JSON.stringify(product));
    nav("/checkout");
  };

  const handlecart = () => {
    alert("Item added to cart");
  };

  return (
    <div className="px-4 sm:px-6 md:px-20 py-10">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

        {/* image */}
        <div className="w-full flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-sm sm:max-w-md h-64 sm:h-80 md:h-[450px] object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* details */}
        <div className="space-y-4">
          <h1 className="text-2xl sm:text-3xl font-bold">{product.name}</h1>

          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            {product.description ||
              "This is a high-quality product. Perfect for everyday use!"}
          </p>

          <p className="text-gray-700 text-sm sm:text-base">
            <strong>Category:</strong>{" "}
            <span className="font-semibold">{product.category}</span>
          </p>

          <p className="text-2xl text-indigo-600 font-bold">
            ₹{product.price}
          </p>

          <p className="text-lg text-yellow-500 font-semibold">
            ⭐ Rating: {product.rating}
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-6">

            <button
              onClick={handlecart}
              className="w-full sm:w-1/2 bg-indigo-400 text-white py-3 rounded-xl 
                         font-semibold hover:bg-indigo-600 transition"
            >
              Add to Cart
            </button>

            <button
              onClick={handleOrder}
              className="w-full sm:w-1/2 bg-red-400 text-white py-3 rounded-xl 
                         font-semibold hover:bg-red-600 transition"
            >
              Order Now
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
