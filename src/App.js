import React from "react";
import products from "./data/products.json";

export default function App() {
  return (
    <div className="bg-[#fef9f4] font-sans text-[#4b6043]">
      <header className="bg-[#d6e5c6] py-6 shadow-md text-center">
        <img
          src="https://i.imgur.com/0y8Ftya.png"
          alt="PureTots Logo"
          className="mx-auto w-32"
        />
        <h1 className="text-4xl font-bold">PureTots</h1>
      </header>

      <section
        className="bg-cover bg-center h-[300px] flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('https://i.imgur.com/TMyoVny.jpg')"
        }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold bg-white/70 px-6 py-4 rounded-xl shadow">
          Soft. Organic. Pure.
        </h2>
        <button className="mt-4 bg-[#4b6043] text-white px-6 py-2 rounded-full shadow hover:bg-[#3a4d35] transition">
          Shop Now
        </button>
      </section>

      <section className="text-center py-10 px-4 bg-white">
        <h2 className="text-2xl font-bold text-[#2e2e2e]">Why PureTots?</h2>
        <p className="mt-4 max-w-xl mx-auto text-[#555]">
          We use 100% organic cotton with baby-safe dyes to ensure the gentlest experience
          for your baby’s skin. Every stitch is made with love and care.
        </p>
      </section>

      <section className="py-10 text-center">
        <h2 className="text-2xl font-bold text-[#2e2e2e]">Top Categories</h2>
        <div className="flex justify-center gap-6 mt-6 flex-wrap">
          <div className="bg-white shadow-md px-6 py-4 rounded-2xl w-40 flex flex-col items-center">
            <span className="text-green-500 text-2xl">👕</span>
            <span className="mt-2 font-semibold">Onesies</span>
          </div>
          <div className="bg-white shadow-md px-6 py-4 rounded-2xl w-40 flex flex-col items-center">
            <span className="text-blue-500 text-2xl">👗</span>
            <span className="mt-2 font-semibold">Frocks</span>
          </div>
        </div>
      </section>

      <section className="py-10 text-center bg-[#fffdf9]">
        <h2 className="text-2xl font-bold text-[#2e2e2e]">Best Sellers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 px-4 max-w-6xl mx-auto">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-xl shadow">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto mb-3"
              />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-500 mt-1">${product.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
