import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
// link styles
import "./styles/app.css";
import Clothing from "./components/Clothing";
import Electronics from "./components/Electronics";
import Cart from "./components/cart/Cart";
import { ShopContextProvider } from "./context/context";
const App = () => {
  return (
    <ShopContextProvider>
      <Router>
        <Header />
        <div style={{ paddingTop: "7em" }}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/clothing" element={<Clothing />} />
            <Route path="/electronics" element={<Electronics />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </ShopContextProvider>
  );
};

export default App;
