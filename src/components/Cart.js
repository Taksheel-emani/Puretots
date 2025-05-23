import React from "react";

const Cart = ({ cartItems, onRemove, onCheckout }) => {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingEstimate = cartItems.length > 0 ? 4.99 : 0; // Flat dummy shipping rate
  const total = subtotal + shippingEstimate;

  return (
    <div className="p-4 bg-white shadow rounded">
<h2 className="text-xl font-semibold text-[#4b6043] mb-4">Your Cart</h2>
<div className="text-right mt-4">
  <p className="text-lg font-bold">Total: ${totalPrice.toFixed(2)}</p>
  <a
    href="https://docs.google.com/forms/d/e/1FAIpQLSeyG7W6F3JbS6FzK3G4nM4XlTNzV1ZnJ8B1zD6WvJwz8WAZFg/viewform"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="bg-[#4b6043] text-white px-6 py-2 rounded mt-2 hover:bg-[#3a4e36]">
      Place Order
    </button>
  </a>
</div>
{cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b py-2"
            >
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">
                  Size: {item.size} | Qty: {item.quantity}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <p>${(item.price * item.quantity).toFixed(2)}</p>
                <button
                  className="text-red-500 text-sm"
                  onClick={() => onRemove(index)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="mt-4 text-right">
            <p className="font-medium">Subtotal: ${subtotal.toFixed(2)}</p>
            <p className="text-sm text-gray-500">Shipping: ${shippingEstimate.toFixed(2)}</p>
            <p className="font-semibold text-lg mt-1">Total: ${total.toFixed(2)}</p>
          </div>
          <button
            onClick={onCheckout}
            className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
