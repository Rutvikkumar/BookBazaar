import React, { useState } from "react";

const CartPage = () => {
  // Sample cart items
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product 1", price: 100, quantity: 1 },
    { id: 2, name: "Product 2", price: 200, quantity: 2 },
    { id: 3, name: "Product 3", price: 150, quantity: 1 },
    { id: 4, name: "Product 4", price: 250, quantity: 1 },
    { id: 5, name: "Product 5", price: 300, quantity: 1 },
    { id: 6, name: "Product 6", price: 400, quantity: 1 },
    { id: 7, name: "Product 7", price: 120, quantity: 2 },
  ]);

  // Update item quantity
  const updateQuantity = (id, increment) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + increment }
          : item
      )
    );
  };

  // Remove item from cart
  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

        <div className="bg-white shadow-md rounded-lg p-6">
          {cartItems.length === 0 ? (
            <p className="text-gray-500 text-center">Your cart is empty.</p>
          ) : (
            <div className="h-72 overflow-y-auto">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b py-4"
                >
                  <div>
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-gray-500">${item.price}</p>
                  </div>

                  <div className="flex items-center">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      disabled={item.quantity === 1}
                      className="bg-gray-200 px-2 py-1 rounded-l hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="px-4">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="bg-gray-200 px-2 py-1 rounded-r hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-6 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold">Order Summary</h2>
          <p className="text-lg mt-2">
            Total Price: <span className="font-semibold">${totalPrice}</span>
          </p>
          <button
            className="bg-blue-500 text-white px-6 py-2 mt-4 rounded hover:bg-blue-600"
            disabled={cartItems.length === 0}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
