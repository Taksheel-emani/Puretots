import React from "react";

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="bg-white rounded-2xl shadow p-4 w-72">
      <img src={product.image} alt={product.name} className="w-full h-48 object-contain"
  onError={(e) => {
    e.target.src = "https://via.placeholder.com/200x200?text=Image+Not+Found";
  }}
/>
      <h2 className="text-xl font-semibold mt-2 text-[#7CA88C]">{product.name}</h2>
      <p className="text-gray-700">${product.price}</p>
      <select className="mt-2 border rounded w-full p-1">
        {product.sizes.map(size => (
          <option key={size}>{size}</option>
        ))}
      </select>
      <button
        onClick={() => onAddToCart(product)}
        className="mt-3 bg-[#7CA88C] text-white w-full py-2 rounded hover:bg-[#6B9879]"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;