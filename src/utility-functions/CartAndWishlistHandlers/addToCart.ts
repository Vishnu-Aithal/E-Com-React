import axios from "axios";
import { CartWishlistDispatch } from "contexts/cart-wishlist-context";
import { HideLoader, ShowLoader } from "contexts/loader-context";
import { Product } from "types/Product";

export const addToCart = async (
    item: Product,
    dispatch: CartWishlistDispatch,
    token: string,
    showLoader: ShowLoader,
    hideLoader: HideLoader
) => {
    showLoader("Adding to Cart");
    try {
        const {
            data: { cart },
        } = await axios.post(
            "/api/user/cart",
            { product: item },
            { headers: { authorization: token } }
        );
        dispatch({ type: "SET_CART", payload: cart });
    } catch (error) {
        return error;
    } finally {
        hideLoader();
    }
};
