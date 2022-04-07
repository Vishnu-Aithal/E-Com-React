import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "contexts/auth-context";
import { ConditionalRouter } from "routes/AuthRouteHandler";
import { FilterProvider } from "contexts/filter-context";
import { CartWishlistProvider } from "contexts/cart-wishlist-context";
import { LoaderProvider } from "contexts/loader-context";
import { ContextProvider } from "contexts/composer-context";

// Call make Server
makeServer();

ReactDOM.render(
    <ContextProvider
        contexts={[
            React.StrictMode,
            BrowserRouter,
            LoaderProvider,
            AuthProvider,
            CartWishlistProvider,
            FilterProvider,
        ]}>
        <ConditionalRouter />
    </ContextProvider>,
    document.getElementById("root")
);
