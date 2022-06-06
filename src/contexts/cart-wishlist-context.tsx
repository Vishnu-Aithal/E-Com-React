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

export type CartWishlistDispatch = React.Dispatch<CartWishlistActions>;
interface CartWishlistContextValue {
    cartWishlistState: CartWishlist;
    cartWishlistDispatch: CartWishlistDispatch;
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
    const { authState } = useAuth();
    const { showLoader, hideLoader } = useLoader();

    useEffect(() => {
        console.log("here");
        (async () => {
            if (authState.isLoggedIn) {
                getCartAndWishlist(
                    authState.token,
                    cartWishlistDispatch,
                    showLoader,
                    hideLoader
                );
            } else {
                resetCartCartAndWishlist(cartWishlistDispatch);
            }
        })();
    }, [authState, showLoader, hideLoader]);
    return (
        <CartWishlistContext.Provider
            value={{ cartWishlistState, cartWishlistDispatch }}>
            {children}
        </CartWishlistContext.Provider>
    );
};

const useCartWishlist = () => useContext(CartWishlistContext);

export { CartWishlistProvider, useCartWishlist };
