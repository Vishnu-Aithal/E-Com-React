import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartPage } from "routes/CartPage.js";
import { HomePage } from "routes/HomePage.js";
import { WishlistPage } from "routes/WishlistPage.js";
import { SignInPage } from "routes/SignInPage";
import { SignUpPage } from "routes/SignUpPage";
import { ProductsPage } from "routes/ProductsPage";

// Call make Server
makeServer();

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<HomePage />} />
                    <Route path="cart" element={<CartPage />} />
                    <Route path="wishlist" element={<WishlistPage />} />
                    <Route path="sign-in" element={<SignInPage />} />
                    <Route path="sign-up" element={<SignUpPage />} />
                    <Route path="products" element={<ProductsPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
