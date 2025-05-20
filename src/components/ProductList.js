import React, { useState } from "react";
import products from "../data/products.json";
import SizeWeightGuide from "./SizeWeightGuide";
import girlsFrock from "../assets/girls_frock.png";
import boysOnesie from "../assets/boys_onesie.png";

const imageMap = {
  'girls_frock.png': girlsFrock,
  'boys_onesie.png': boysOnesie,
};

const ProductList = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    alert("Added to cart!");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Shop Baby Clothes</h2>
      <SizeWeightGuide />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow bg-white">
<img src={imageMap[product.image]} alt={product.name} className="w-32 h-32 object-cover rounded" />
<h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-[#7CA88C] font-bold mt-2">${product.price}</p>
            <button onClick={() => addToCart(product)} className="mt-2 bg-[#7CA88C] text-white px-4 py-2 rounded">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
