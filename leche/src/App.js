import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import MainNave from './headers/MainNave';

import { products } from "./components/data";
import Viewproduct from "./components/productpage/Viewproduct";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Productpage from "./pages/Productpage"
import Login from "./pages/login";
import Wishlist from "./pages/Wishlist";
import { ShoppinghcartProvider } from "./components/shoppingcart/shppingcartcontext";
import './footer.css'

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
      <footer style={{ height: "", position: "relative", top: "70px" }}>
        <div className="Footer">
          <div>
            <div className="Footer__content">
              <p>LECHE © 2023 | جميع الحقوق محفوظة</p>
            </div>
            <div>
              <div className="site-footer__social-icons">
                <div className="site-footer__social-icons-member">
                  <a style={{ color: "#fff" }} href="" target="_blank">
                    <InstagramIcon />
                  </a>
                </div>
                <div className="site-footer__social-icons-member">
                  <FacebookIcon />
                </div>
                <div className="site-footer__social-icons-member">
                  <TwitterIcon />
                </div>
                {/* <div
              
              className="site-footer__social-icon-member"
              rel="noopener noreferrer"
              target="_blank"
            >
              <YouTubeIcon />
            </div>*/}
              </div>
            </div>
          </div>
        </div>
      </footer>

    </ShoppinghcartProvider>
  );
}

export default App;
