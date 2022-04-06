import { TopNav } from "./components/TopNav";
import { Outlet } from "react-router-dom";
import "./index.css";

import { useAuth } from "contexts/auth-context";
import { useCartWishlist } from "contexts/cart-wishlist-context";
import { useEffect } from "react";

import { getCartAndWishlist } from "utility-functions/cartWishllistHandler";
import { Loader } from "components/Loader";
import { useLoader } from "contexts/loader-context";

function App() {
    const {
        authState: { isLoggedIn, token },
    } = useAuth();
    const { cartWishlistDispatch } = useCartWishlist();
    const { showLoader, hideLoader } = useLoader();

    useEffect(() => {
        (async () => {
            if (isLoggedIn) {
                const { cart, wishlist } = await getCartAndWishlist(
                    token,
                    showLoader,
                    hideLoader
                );
                cartWishlistDispatch({
                    type: "LOAD_DATA",
                    payload: { cart, wishlist },
                });
            } else {
                cartWishlistDispatch({
                    type: "LOAD_DATA",
                    payload: { cart: [], wishlist: [] },
                });
            }
        })();
    }, [isLoggedIn]);

    return (
        <div className="App">
            <Loader />
            <main>
                <TopNav />
                <Outlet />
            </main>
        </div>
    );
}

export default App;
