import React, { useReducer, useContext, createContext, useEffect } from "react";
import {
    initialState,
    cartWishlistReducerFunction,
    CartWishlist,
} from "reducer-functions/CartWishListReducer/cartWishlistReducer";
import { useAuth } from "./auth-context";
import { useLoader } from "./loader-context";
import {
    getCartAndWishlist,
    resetCartCartAndWishlist,
} from "utility-functions/cartWishllistHandler";
import { CartWishlistActions } from "reducer-functions/CartWishListReducer/CartWishlistActionTypes";

interface CartWishlistContextValue {
    cartWishlistState: CartWishlist;
    cartWishlistDispatch: React.Dispatch<CartWishlistActions>;
}

const CartWishlistContext = createContext<CartWishlistContextValue>({
    cartWishlistState: initialState,
    cartWishlistDispatch: () => {},
});

const CartWishlistProvider: React.FC<React.PropsWithChildren> = ({
    children,
}) => {
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
