import axios from "axios";
import { CartWishlistDispatch } from "contexts/cart-wishlist-context";
import { HideLoader, ShowLoader } from "contexts/loader-context";
import { Product } from "types/Product";

export const removeFromWishlist = async (
    item: Product,
    token: string,
    dispatch: CartWishlistDispatch,
    showLoader: ShowLoader,
    hideLoader: HideLoader
) => {
    showLoader("Removing from Wishlist");
    try {
        const {
            data: { wishlist },
        } = await axios.delete(`/api/user/wishlist/${item._id}`, {
            headers: { authorization: token },
        });
        dispatch({ type: "SET_WISHLIST", payload: wishlist });
    } catch (error) {
        return error;
    } finally {
        hideLoader();
    }
};
