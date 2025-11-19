import React from "react";

const OrderSuccess = () => {
  const order = JSON.parse(localStorage.getItem("order"));

  return (
    <div className="px-6 py-20">
      <h1 className="text-3xl font-bold text-green-600 text-center mb-4">
        Order Placed Successfully!
      </h1>

      <p className="text-lg text-gray-600 text-center mb-6">
        Thank you for your order. We will deliver your items soon.
      </p>

      {order && (
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">

          {/* left — User Info */}
          <div className="bg-white p-6 shadow rounded-xl">
            <h2 className="text-xl font-semibold mb-3">Delivery Details</h2>

            <p><strong>Name:</strong> {order.name}</p>
            <p><strong>Address:</strong> {order.address}</p>
            <p><strong>Phone:</strong> {order.phone}</p>
            <p><strong>Date:</strong> {order.date}</p>
          </div>

          {/* right — PRODUCT DETAILS */}
          {order.product && (
            <div className="bg-white p-6 shadow rounded-xl">
              <h2 className="text-xl font-semibold mb-3">Ordered Product</h2>

              <div className="flex gap-4 items-start">
                <img
                  src={order.product.image}
                  alt={order.product.name}
                  className="w-28 h-28 rounded-lg object-cover shadow"
                />

                <div>
                  <h3 className="font-semibold text-lg">{order.product.name}</h3>

                  <p className="text-gray-700 mt-1">
                    <strong>Price:</strong> ₹{order.product.price}
                  </p>

                  <p className="text-indigo-600 font-semibold mt-2">
                    Total Paid: ₹{order.product.price}
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>
      )}
    </div>
  );
};

export default OrderSuccess;
