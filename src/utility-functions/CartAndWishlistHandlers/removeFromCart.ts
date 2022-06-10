import axios from "axios";
import { CartWishlistDispatch } from "contexts/cart-wishlist-context";
import { HideLoader, ShowLoader } from "contexts/loader-context";
import { Product } from "types/Product";

export const removeFromCart = async (
    item: Product,
    token: string,
    dispatch: CartWishlistDispatch,
    showLoader: ShowLoader,
    hideLoader: HideLoader
) => {
    showLoader("Removing From Cart");
    try {
        const {
            data: { cart },
        } = await axios.delete(`/api/user/cart/${item._id}`, {
            headers: { authorization: token },
        });
        dispatch({ type: "SET_CART", payload: cart });
    } catch (error) {
        return error;
    } finally {
        hideLoader();
    }
};
