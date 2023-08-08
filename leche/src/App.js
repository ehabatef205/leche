import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import MainNave from './headers/MainNave';

import { products } from "./components/data";
import Viewproduct from "./components/productpage/Viewproduct";

import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Productpage from "./pages/Productpage"
import Login from "./pages/login";
import Wishlist from "./pages/Wishlist";
import { ShoppinghcartProvider } from "./components/shoppingcart/shppingcartcontext";

function App() {

  return (
    <ShoppinghcartProvider className="App">
      <Router>
        <MainNave></MainNave>
        <Routes>
          <Route path="/Viewproduct/:id" element={<Viewproduct products={products} ></Viewproduct>} />

          <Route path="/" element={<Home />} />
          <Route path="/Productpage/:id" element={<Productpage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Wishlist" element={<Wishlist />} />
        </Routes>
      </Router>
      <footer style={{ height: "200px", backgroundColor: "black", position: "relative", top: "70px" }}></footer>

    </ShoppinghcartProvider>
  );
}

export default App;
