import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {

  const nav=useNavigate()
  const [product, setProduct] = useState(null);

  const [data, setdata] = useState({
    name: "",
    address: "",
    phone: "",
    date: new Date().toLocaleString(),
  });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("product"));
    setProduct(saved);
  }, []);

  const handleOrder = () => {
    if (!data.name || !data.address || !data.phone) {
      alert("Please fill all fields");
      return;
    }

    const phoneRegex = /^[98]\d{9}$/;
    if (!phoneRegex.test(data.phone)) {
      alert("Phone number must be 10 digits and start with 9 or 8");
      return;
    }

    const newOrder = { ...data, product };

    const existingOrders = JSON.parse(localStorage.getItem("order")) || [];

    // Save new order + previous ones
    localStorage.setItem("order", JSON.stringify([...existingOrders, newOrder]));

    // window.location.href = "/order-success";
    nav("/order-success")
  };

  return (
    <div className="px-6 py-10 md:px-16">
      <h1 className="text-3xl font-bold mb-6 text-center">Checkout</h1>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">

        {/* LEFT — DELIVERY FORM */}
        <div className="bg-white p-6 shadow rounded-xl">
          <h2 className="text-xl font-semibold mb-4">Delivery Details</h2>

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-3 rounded-lg mb-3"
            value={data.name}
            onChange={(e) => setdata({ ...data, name: e.target.value })}
          />

          <textarea
            placeholder="Full Address"
            className="w-full border p-3 rounded-lg mb-3"
            rows="3"
            value={data.address}
            onChange={(e) => setdata({ ...data, address: e.target.value })}
          ></textarea>

          <input
            type="text"
            placeholder="Phone Number"
            maxLength={10}
            className="w-full border p-3 rounded-lg mb-3"
            value={data.phone}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "");
              if (value.length === 1 && !["9", "8"].includes(value)) return;
              setdata({ ...data, phone: value });
            }}
          />

          <button
            onClick={handleOrder}
            className="mt-4 w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 duration-300"
          >
            Place Order (Cash on Delivery)
          </button>
        </div>

        {/* RIGHT — PRODUCT DETAILS */}
        {product && (
          <div className="bg-white p-6 shadow rounded-xl h-fit">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

            <div className="flex gap-4 items-start">
              <img
                src={product.image}
                alt={product.name}
                className="w-28 h-28 rounded-lg object-cover shadow"
              />

              <div>
                <h3 className="font-semibold text-lg">{product.name}</h3>

                <p className="text-gray-600 text-sm">
                  <strong>Price:</strong> ₹{product.price}
                </p>

                <p className="font-semibold text-indigo-600 mt-2">
                  Subtotal: ₹{product.price}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Checkout;
