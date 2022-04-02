import { useReducer, useContext, createContext } from "react";
import {
    initialState,
    cartWishlistReducerFunction,
} from "reducer-functions/cartWishlistReducer";

const CartWishlistContext = createContext();

const CartWishlistProvider = ({ children }) => {
    const [cartWishlistState, cartWishlistDispatch] = useReducer(
        cartWishlistReducerFunction,
        initialState
    );
    return (
        <CartWishlistContext.Provider
            value={{ cartWishlistState, cartWishlistDispatch }}>
            {children}
        </CartWishlistContext.Provider>
    );
};

const useCartWishlist = () => useContext(CartWishlistContext);

export { CartWishlistProvider, useCartWishlist };
