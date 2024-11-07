import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import OurFood from "./Components/OurFood";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import Cart from "./Components/Cart";

function App() {
  // Access the cart items from Redux store
  const cartItems = useSelector((state) => state.food.cart);

  // Calculate the total number of items in the cart
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <BrowserRouter>
        <Header count={cartCount} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/ourfood" element={<OurFood />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
