import axios from "axios";
import { CartWishlistDispatch } from "contexts/cart-wishlist-context";
import { HideLoader, ShowLoader } from "contexts/loader-context";
import { CartProduct, Product } from "types/Product";

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
        console.log(error);
    } finally {
        hideLoader();
    }
};

export const resetCartCartAndWishlist = (dispatch: CartWishlistDispatch) =>
    dispatch({
        type: "LOAD_DATA",
        payload: { cart: [], wishlist: [] },
    });

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
        console.log(error);
    } finally {
        hideLoader();
    }
};

export const increaseCartQty = async (
    item: Product,
    token: string,
    dispatch: CartWishlistDispatch,
    showLoader: ShowLoader,
    hideLoader: HideLoader
) => {
    showLoader("Increasing Quantity");
    try {
        const {
            data: { cart },
        } = await axios.post(
            `/api/user/cart/${item._id}`,
            { action: { type: "increment" } },
            { headers: { authorization: token } }
        );
        dispatch({ type: "SET_CART", payload: cart });
    } catch (error) {
        console.log(error);
    } finally {
        hideLoader();
    }
};

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
        console.log(error);
    } finally {
        hideLoader();
    }
};

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
        console.log(error);
    } finally {
        hideLoader();
    }
};

export const addToWishlist = async (
    item: Product,
    token: string,
    dispatch: CartWishlistDispatch,
    showLoader: ShowLoader,
    hideLoader: HideLoader
) => {
    showLoader("Adding to Wishlist");
    try {
        const {
            data: { wishlist },
        } = await axios.post(
            "/api/user/wishlist",
            { product: item },
            { headers: { authorization: token } }
        );
        dispatch({ type: "SET_WISHLIST", payload: wishlist });
    } catch (error) {
        console.log(error);
    } finally {
        hideLoader();
    }
};

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
        console.log(error);
    } finally {
        hideLoader();
    }
};

export const moveToCart = async (
    item: Product,
    token: string,
    dispatch: CartWishlistDispatch,
    showLoader: ShowLoader,
    hideLoader: HideLoader
) => {
    showLoader("Moving to Cart");
    try {
        const {
            data: { wishlist },
        } = await axios.delete(`/api/user/wishlist/${item._id}`, {
            headers: { authorization: token },
        });
        const {
            data: { cart },
        } = await axios.post(
            "/api/user/cart",
            { product: item },
            { headers: { authorization: token } }
        );
        dispatch({ type: "SET_CART", payload: cart });
        dispatch({ type: "SET_WISHLIST", payload: wishlist });
    } catch (error) {
        console.log(error);
    } finally {
        hideLoader();
    }
};
export const moveToWishlist = async (
    item: Product,
    token: string,
    dispatch: CartWishlistDispatch,
    showLoader: ShowLoader,
    hideLoader: HideLoader
) => {
    showLoader("Moving to Wishlist");
    try {
        const {
            data: { cart },
        } = await axios.delete(`/api/user/cart/${item._id}`, {
            headers: { authorization: token },
        });

        const {
            data: { wishlist },
        } = await axios.post(
            "/api/user/wishlist",
            { product: item },
            { headers: { authorization: token } }
        );
        dispatch({ type: "SET_CART", payload: cart });
        dispatch({ type: "SET_WISHLIST", payload: wishlist });
    } catch (error) {
        console.log(error);
    } finally {
        hideLoader();
    }
};

export const inCart = (item: Product, cart: CartProduct[]) => {
    return cart.findIndex((cartItem) => cartItem._id === item._id) !== -1;
};
export const inWishlist = (item: Product, wishlist: Product[]) => {
    return (
        wishlist.findIndex((wishlistItem) => wishlistItem._id === item._id) !==
        -1
    );
};
