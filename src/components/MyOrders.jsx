import React, { useState, useEffect } from "react";

const statusColors = {
  Delivered: "bg-green-100 text-green-700",
  Shipped: "bg-blue-100 text-blue-700",
  Processing: "bg-yellow-100 text-yellow-700",
  Cancelled: "bg-red-100 text-red-700",
};

const MyOrders = () => {
  const [data, setData] = useState([]);

  // Load order once
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("order"));

    if (Array.isArray(saved)) {
      setData(saved);
    } else if (saved) {
      setData([saved]); // Convert object → array
    } else {
      setData([]);
    }
  }, []);

  return (
    <div className="px-4 sm:px-6 md:px-16 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        My Orders
      </h1>

      {data.length > 0 ? (
        data.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 border max-w-3xl mx-auto mb-6"
          >
            {/* ORDER DETAILS */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

              <p>
                <strong>Name:</strong> {item.name}
              </p>
              <p>
                <strong>Address:</strong> {item.address}
              </p>
              <p>
                <strong>Phone:</strong> {item.phone}
              </p>
              <p>
                <strong>Date:</strong> {item.date}
              </p>

              <p className="mt-2">
                <strong>Status:</strong>{" "}
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    statusColors["Processing"]
                  }`}
                >
                  Processing
                </span>
              </p>
            </div>

            {/* PRODUCT DETAILS */}
            {item.product && (
              <div className="border-t pt-4">
                <h2 className="text-xl font-semibold mb-3">
                  Ordered Product
                </h2>

                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-24 h-24 rounded-lg object-cover shadow"
                  />

                  <div>
                    <h3 className="font-semibold text-lg">
                      {item.product.name}
                    </h3>

                    <p className="text-gray-700 mt-1">
                      <strong>Category:</strong> {item.product.category}
                    </p>

                    <p className="text-gray-700 mt-1">
                      <strong>Price:</strong> ₹{item.product.price}
                    </p>

                    <p className="text-indigo-600 font-bold mt-2">
                      Total Paid: ₹{item.product.price}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* CLEAR ORDER BUTTON */}
            <div className="text-center mt-6">
              <button
                onClick={() => {
                  localStorage.removeItem("order");
                  window.location.reload();
                }}
                className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Cancel Order
              </button>
            </div>
          </div>
        ))
      ) : (
        <h3 className="text-center text-red-500">No orders</h3>
      )}
    </div>
  );
};

export default MyOrders;
