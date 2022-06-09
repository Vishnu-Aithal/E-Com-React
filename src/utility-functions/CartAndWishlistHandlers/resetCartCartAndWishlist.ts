import { CartWishlistDispatch } from "contexts/cart-wishlist-context";

export const resetCartCartAndWishlist = (dispatch: CartWishlistDispatch) =>
    dispatch({
        type: "LOAD_DATA",
        payload: { cart: [], wishlist: [] },
    });
