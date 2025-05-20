import React from "react";

const Checkout = ({ onPlaceOrder }) => {
  return (
    <div className="p-4 bg-white shadow rounded max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Checkout</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onPlaceOrder();
        }}
      >
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Shipping Address</label>
          <textarea
            required
            className="w-full border px-3 py-2 rounded"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
