import React from "react";
import { orders } from "../assets/myorders";

const statusColors = {
  Delivered: "bg-green-100 text-green-700",
  Shipped: "bg-blue-100 text-blue-700",
  Processing: "bg-yellow-100 text-yellow-700",
  Cancelled: "bg-red-100 text-red-700",
  Returned: "bg-purple-100 text-purple-700",
};

const MyOrders = () => {
  return (
    <div className="px-4 sm:px-6 md:px-16 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        My Orders
      </h1>

      {orders.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          You have no orders yet.
        </p>
      ) : (
        <div className="space-y-6">
          {orders.slice(0, 5).map((order) => (
            <div
              key={order.orderId}
              className="bg-white shadow-lg rounded-xl p-5 md:p-6 border"
            >
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* left – Order Details */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                    <p className="font-semibold text-lg">
                      Order ID:{" "}
                      <span className="text-indigo-600">{order.orderId}</span>
                    </p>

                    <span
                      className={`px-4 py-1 text-sm rounded-full font-medium ${statusColors[order.status]}`}
                    >
                      {order.status}
                    </span>
                  </div>

                  {/* Order Info */}
                  <div className="text-gray-700 space-y-2">
                    <p>
                      <strong>Order Date:</strong> {order.orderDate}
                    </p>

                    {order.deliveryDate && (
                      <p>
                        <strong>Delivered On:</strong> {order.deliveryDate}
                      </p>
                    )}

                    {order.estimatedDelivery && (
                      <p>
                        <strong>Expected Delivery:</strong>{" "}
                        {order.estimatedDelivery}
                      </p>
                    )}

                    <p>
                      <strong>Total Amount:</strong> ₹{order.totalAmount}
                    </p>

                    <p>
                      <strong>Payment:</strong> {order.paymentMethod}
                    </p>

                    <p>
                      <strong>Tracking:</strong> {order.trackingNumber}
                    </p>
                  </div>
                </div>

                {/* right – Items Section */}
                <div className="md:border-l md:pl-6 md:border-l-gray-200">
                  <h2 className="font-semibold text-lg mb-3 text-gray-800">
                    Items
                  </h2>

                  {/* Make items scroll on small devices */}
                  <div className="space-y-4 max-h-64 overflow-y-auto pr-1">
                    {order.items.map((item, index) => (
                      <div
                        key={index}
                        className="flex gap-4 items-start bg-gray-50 p-3 rounded-lg shadow-sm"
                      >
                        <img
                          src={item.image}
                          alt={item.productName}
                          className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-md shadow"
                        />

                        <div>
                          <h3 className="font-semibold">{item.productName}</h3>

                          <p className="text-gray-600 text-sm">
                            <strong>Qty:</strong> {item.quantity}
                          </p>

                          <p className="text-gray-600 text-sm">
                            <strong>Price:</strong> ₹{item.price}
                          </p>

                          <p className="font-semibold text-indigo-600">
                            Subtotal: ₹{(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyOrders;
