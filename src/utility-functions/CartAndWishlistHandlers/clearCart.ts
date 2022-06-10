import axios from "axios";
import { CartWishlistDispatch } from "contexts/cart-wishlist-context";

export const clearCart = async (
    token: string,
    dispatch: CartWishlistDispatch
) => {
    try {
        const {
            data: { cart },
        } = await axios.delete(`/api/user/cart`, {
            headers: { authorization: token },
        });
        dispatch({ type: "SET_CART", payload: cart });
    } catch (error) {
        return error;
    } finally {
    }
};
