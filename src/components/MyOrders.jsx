import React from "react";

const statusColors = {
  Delivered: "bg-green-100 text-green-700",
  Shipped: "bg-blue-100 text-blue-700",
  Processing: "bg-yellow-100 text-yellow-700",
  Cancelled: "bg-red-100 text-red-700",
};

const MyOrders = () => {
  const order = JSON.parse(localStorage.getItem("order"));

  if (!order) {
    return (
      <div className="px-6 py-20 text-center">
        <h1 className="text-2xl font-bold text-red-500">No Orders Found</h1>
        <p className="text-gray-600 mt-2">Please place an order first.</p>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6 md:px-16 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        My Orders
      </h1>

      <div className="bg-white shadow-lg rounded-xl p-6 border max-w-3xl mx-auto">

        {/* ORDER DETAILS */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          <p><strong>Name:</strong> {order.name}</p>
          <p><strong>Address:</strong> {order.address}</p>
          <p><strong>Phone:</strong> {order.phone}</p>
          <p><strong>Date:</strong> {order.date}</p>

          <p className="mt-2">
            <strong>Status:</strong>{" "}
            <span
              className={`px-3 py-1 rounded-full text-sm ${statusColors["Processing"]}`}
            >
              Processing
            </span>
          </p>
        </div>

        {/* PRODUCT DETAILS */}
        {order.product && (
          <div className="border-t pt-4">
            <h2 className="text-xl font-semibold mb-3">Ordered Product</h2>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <img
                src={order.product.image}
                alt={order.product.name}
                className="w-24 h-24 rounded-lg object-cover shadow"
              />

              <div>
                <h3 className="font-semibold text-lg">{order.product.name}</h3>

                <p className="text-gray-700 mt-1">
                  <strong>Category:</strong> {order.product.category}
                </p>

                <p className="text-gray-700 mt-1">
                  <strong>Price:</strong> ₹{order.product.price}
                </p>

                <p className="text-indigo-600 font-bold mt-2">
                  Total Paid: ₹{order.product.price}
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
    </div>
  );
};

export default MyOrders;
