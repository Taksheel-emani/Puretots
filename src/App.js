import React, { useState } from "react";
import "./App.css";
import logo from "./assets/logo.png";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [checkoutMode, setCheckoutMode] = useState(false);

  const handleAddToCart = (product, size) => {
    const updatedCart = [...cartItems];
    const index = updatedCart.findIndex(
      (item) => item.id === product.id && item.size === size
    );

    if (index >= 0) {
      updatedCart[index].quantity += 1;
    } else {
      updatedCart.push({ ...product, size, quantity: 1 });
    }

    setCartItems(updatedCart);
  };

  const handleRemoveFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  const handleCheckout = () => {
    setCheckoutMode(true);
  };

  const handleOrderSuccess = () => {
    setCartItems([]);
    setCheckoutMode(false);
    alert("Order placed successfully!");
  };

  return (
    <div className="min-h-screen bg-[#FDF8F3] text-gray-800">
      <div className="flex items-center justify-center p-4 bg-white shadow-md sticky top-0 z-10">
        <img src={logo} alt="PureTots Logo" className="w-32 h-auto" />
      </div>

      <div className="p-6 max-w-screen-xl mx-auto">
        {checkoutMode ? (
          <Checkout onOrderSuccess={handleOrderSuccess} />
        ) : (
          <>
            <ProductList onAddToCart={handleAddToCart} />
            <Cart
              cartItems={cartItems}
              onRemove={handleRemoveFromCart}
              onCheckout={handleCheckout}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
