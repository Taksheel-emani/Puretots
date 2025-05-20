import React from "react";

const Cart = ({ cartItems, onRemove, onCheckout }) => {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingEstimate = cartItems.length > 0 ? 4.99 : 0; // Flat dummy shipping rate
  const total = subtotal + shippingEstimate;

  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-xl font-semibold mb-4">Cart</h2>
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
