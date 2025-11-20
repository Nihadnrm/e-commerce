import React from "react";

const OrderSuccess = () => {
  let order = JSON.parse(localStorage.getItem("order"));

  // If "order" is saved as an array, use the first item
  if (Array.isArray(order)) {
    order = order[0];
  }

  if (!order) {
    return (
      <div className="px-6 py-20 text-center">
        <h1 className="text-2xl font-bold text-red-500 mb-4">
          No Order Found!
        </h1>
        <p className="text-gray-600 text-lg">Please place an order first.</p>
      </div>
    );
  }

  return (
    <div className="px-6 py-10 md:px-16">
      <h1 className="text-3xl font-bold text-green-600 text-center mb-4">
        Order Placed Successfully!
      </h1>

      <p className="text-lg text-gray-600 text-center mb-10">
        Thank you for your order. Your product will be delivered soon.
      </p>

      {/* MAIN GRID — USER + PRODUCT */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* LEFT — USER DETAILS */}
        <div className="bg-white p-6 shadow-lg rounded-xl">
          <h2 className="text-xl font-semibold mb-3">Delivery Details</h2>

          <div className="space-y-2 text-gray-700">
            <p><strong>Name:</strong> {order.name}</p>
            <p><strong>Address:</strong> {order.address}</p>
            <p><strong>Phone:</strong> {order.phone}</p>
            <p><strong>Date:</strong> {order.date}</p>
          </div>
        </div>

        {/* RIGHT — PRODUCT DETAILS */}
        <div className="bg-white p-6 shadow-lg rounded-xl">
          <h2 className="text-xl font-semibold mb-3">Ordered Product</h2>

          {!order.product ? (
            <p className="text-gray-500">No product found.</p>
          ) : (
            <div className="flex flex-col sm:flex-row gap-4 items-start">

              {/* IMAGE */}
              <img
                src={order.product.image}
                alt={order.product.name}
                className="w-32 h-32 sm:w-28 sm:h-28 rounded-lg object-cover shadow"
              />

              {/* DETAILS */}
              <div>
                <h3 className="font-semibold text-lg">{order.product.name}</h3>

                <p className="text-gray-700 mt-1">
                  <strong>Category:</strong> {order.product.category}
                </p>

                <p className="text-gray-700 mt-1">
                  <strong>Price:</strong> ₹{order.product.price}
                </p>

                <p className="text-indigo-600 font-semibold mt-2 text-lg">
                  Total Paid: ₹{order.product.price}
                </p>
              </div>
            </div>
          )}
        </div>

      </div>

      {/* BACK BUTTON */}
      <div className="text-center mt-10">
        <a
          href="/allproducts"
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 duration-300"
        >
          Continue Shopping
        </a>
      </div>
    </div>
  );
};

export default OrderSuccess;
