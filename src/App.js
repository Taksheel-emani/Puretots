import React from "react";
import "./App.css";
import logo from "./assets/logo.png";

function App() {
  return (
    <div className="min-h-screen bg-[#FDF8F3] flex flex-col items-center justify-center p-6">
      <img src={logo} alt="PureTots Logo" className="w-40 mb-6" />
      <h1 className="text-4xl font-semibold text-[#7CA88C] mb-4">Gentle Threads for Delicate Skin</h1>
      <p className="text-lg text-gray-600 text-center max-w-md">
        Every PureTots outfit is woven with care — breathable, stretchable, and ultra-soft.
        Ideal for sensitive skin, playful moments, and snuggly naps.
      </p>
    </div>
  );
}

export default App;
