import { CartProduct, Product } from "types/Product";
import { CartWishlistActions } from "./CartWishlistActionTypes";

export interface CartWishlist {
    cart: CartProduct[];
    wishlist: Product[];
}
export const initialState: CartWishlist = {
    cart: [],
    wishlist: [],
};

export const cartWishlistReducerFunction = (
    state: CartWishlist,
    { type, payload }: CartWishlistActions
) => {
    switch (type) {
        case "LOAD_DATA":
            return {
                ...state,
                cart: payload.cart,
                wishlist: payload.wishlist,
            };
        case "SET_CART":
            return {
                ...state,
                cart: payload,
            };
        case "SET_WISHLIST":
            return {
                ...state,
                wishlist: payload,
            };

        default:
            return state;
    }
};
