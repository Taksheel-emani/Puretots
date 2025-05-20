import React from "react";

const OrderSuccess = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FDF8F3] p-6">
      <div className="bg-white p-8 rounded shadow max-w-md text-center">
        <h1 className="text-2xl font-semibold text-green-600 mb-4">Order Placed Successfully!</h1>
        <p className="text-gray-700 mb-6">
          Thank you for shopping with PureTots. Your baby's comfort is on its way!
        </p>
        <img
          src="https://cdn-icons-png.flaticon.com/512/4224/4224653.png"
          alt="Success"
          className="w-24 mx-auto mb-4"
        />
        <button
          onClick={() => window.location.reload()}
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          Shop More
        </button>
      </div>
    </div>
  );
};

export default OrderSuccess;
