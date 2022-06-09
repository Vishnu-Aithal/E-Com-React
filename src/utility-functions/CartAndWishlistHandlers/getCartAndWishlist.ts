import axios from "axios";
import { CartWishlistDispatch } from "contexts/cart-wishlist-context";
import { HideLoader, ShowLoader } from "contexts/loader-context";

export const getCartAndWishlist = async (
    token: string,
    dispatch: CartWishlistDispatch,
    showLoader: ShowLoader,
    hideLoader: HideLoader
) => {
    showLoader("Getting Cart and Wishlist");
    try {
        const {
            data: { cart },
        } = await axios.get("/api/user/cart", {
            headers: { authorization: token },
        });
        const {
            data: { wishlist },
        } = await axios.get("/api/user/wishlist", {
            headers: { authorization: token },
        });
        dispatch({
            type: "LOAD_DATA",
            payload: { cart, wishlist },
        });
    } catch (error) {
        return error;
    } finally {
        hideLoader();
    }
};
