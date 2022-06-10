import axios from "axios";
import { CartWishlistDispatch } from "contexts/cart-wishlist-context";
import { HideLoader, ShowLoader } from "contexts/loader-context";
import { Product } from "types/Product";

export const decreaseCartQty = async (
    item: Product,
    token: string,
    dispatch: CartWishlistDispatch,
    showLoader: ShowLoader,
    hideLoader: HideLoader
) => {
    showLoader("Decreasing Quantity");
    try {
        const {
            data: { cart },
        } = await axios.post(
            `/api/user/cart/${item._id}`,
            { action: { type: "decrement" } },
            { headers: { authorization: token } }
        );
        dispatch({ type: "SET_CART", payload: cart });
    } catch (error) {
        return error;
    } finally {
        hideLoader();
    }
};
