import { useReducer, useContext, createContext, useEffect } from "react";
import {
    initialState,
    cartWishlistReducerFunction,
} from "reducer-functions/cartWishlistReducer";
import { useAuth } from "./auth-context";
import { useLoader } from "./loader-context";
import {
    getCartAndWishlist,
    resetCartCartAndWishlist,
} from "utility-functions/cartWishllistHandler";

const CartWishlistContext = createContext();

const CartWishlistProvider = ({ children }) => {
    const [cartWishlistState, cartWishlistDispatch] = useReducer(
        cartWishlistReducerFunction,
        initialState
    );
    const {
        authState: { isLoggedIn, token },
    } = useAuth();
    const { showLoader, hideLoader } = useLoader();

    useEffect(() => {
        (async () => {
            isLoggedIn
                ? getCartAndWishlist(
                      token,
                      cartWishlistDispatch,
                      showLoader,
                      hideLoader
                  )
                : resetCartCartAndWishlist(cartWishlistDispatch);
        })();
    }, [isLoggedIn]);
    return (
        <CartWishlistContext.Provider
            value={{ cartWishlistState, cartWishlistDispatch }}>
            {children}
        </CartWishlistContext.Provider>
    );
};

const useCartWishlist = () => useContext(CartWishlistContext);

export { CartWishlistProvider, useCartWishlist };
