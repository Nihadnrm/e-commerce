import React, { useState } from "react";

const Cart = () => {

  const [cart, setCart] = useState([
    {
      id: 0,
      name: "Boys Shirt",
      price: 699,
      image:
        "https://st3.depositphotos.com/3591429/14576/i/450/depositphotos_145763853-stock-photo-stylish-caucasian-little-boy.jpg",
      quantity: 1,
    },
    {
      id: 1,
      name: "Running Shoes",
      price: 1299,
      image:
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600",
      quantity: 1,
    },
  ]);

  // Increase quantity
  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease quantity
  const decreaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Delete item
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Calculate total
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="px-6 py-10 md:px-16">
      <h1 className="text-3xl font-bold mb-8 text-center">Your Cart</h1>

   
      {cart.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">Your cart is empty.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-10">
         
          <div className="md:col-span-2 space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-6 bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />

                <div className="flex-1">
                  <h2 className="font-semibold text-xl">{item.name}</h2>
                  <p className="text-indigo-600 font-bold mt-1">
                    ₹{item.price}
                  </p>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-4 mt-3">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
                    >
                      -
                    </button>

                    <span className="text-lg">{item.quantity}</span>

                    <button
                      onClick={() => increaseQty(item.id)}
                      className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>

                  {/* Remove button */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="mt-3 text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="bg-white shadow p-6 rounded-xl h-fit">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>

            <div className="flex justify-between text-lg mb-4">
              <span>Total</span>
              <span className="font-bold">₹{total}</span>
            </div>

            <button className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 duration-300">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
