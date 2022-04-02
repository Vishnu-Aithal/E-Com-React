import axios from "axios";

export const getCartAndWishlist = async (token, showLoader, hideLoader) => {
    showLoader("Getting Cart and Wishlist");
    try {
        const {
            status: cartStatus,
            data: { cart },
        } = await axios.get("/api/user/cart", {
            headers: { authorization: token },
        });
        const {
            status: wishlistStatus,
            data: { wishlist },
        } = await axios.get("/api/user/wishlist", {
            headers: { authorization: token },
        });
        return { cart, wishlist };
    } catch (error) {
        console.log(error);
    } finally {
        hideLoader();
    }
};

export const addToCart = async (
    item,
    dispatch,
    token,
    showLoader,
    hideLoader
) => {
    showLoader("Adding to Cart");
    try {
        const {
            status,
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
    item,
    dispatch,
    token,
    showLoader,
    hideLoader
) => {
    showLoader("Increasing Quantity");
    try {
        const {
            status,
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
    item,
    dispatch,
    token,
    showLoader,
    hideLoader
) => {
    showLoader("Decreasing Quantity");
    try {
        const {
            status,
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
    item,
    dispatch,
    token,
    showLoader,
    hideLoader
) => {
    showLoader("Removing From Cart");
    try {
        const {
            status,
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
    item,
    dispatch,
    token,
    showLoader,
    hideLoader
) => {
    showLoader("Adding to Wishlist");
    try {
        const {
            status,
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
    item,
    dispatch,
    token,
    showLoader,
    hideLoader
) => {
    showLoader("Removing from Wishlist");
    try {
        const {
            status,
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
    item,
    dispatch,
    token,
    showLoader,
    hideLoader
) => {
    showLoader("Moving to Cart");
    try {
        const {
            status: wishlistStatus,
            data: { wishlist },
        } = await axios.delete(`/api/user/wishlist/${item._id}`, {
            headers: { authorization: token },
        });
        const {
            status: cartStatus,
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
    item,
    dispatch,
    token,
    showLoader,
    hideLoader
) => {
    showLoader("Moving to Wishlist");
    try {
        const {
            status: cartStatus,
            data: { cart },
        } = await axios.delete(`/api/user/cart/${item._id}`, {
            headers: { authorization: token },
        });

        const {
            status: wishlistStatus,
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

export const inCart = (item, cart) => {
    return cart.findIndex((cartItem) => cartItem._id === item._id) !== -1;
};
export const inWishlist = (item, wishlist) => {
    return (
        wishlist.findIndex((wishlistItem) => wishlistItem._id === item._id) !==
        -1
    );
};
