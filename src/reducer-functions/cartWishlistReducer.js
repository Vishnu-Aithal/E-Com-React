export const initialState = {
    cart: [],
    wishlist: [],
};
export const cartWishlistReducerFunction = (state, { type, payload }) => {
    const { cart, wishlist } = state;
    const { _id: currentId } = payload;
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
        case "ADD_T0_CART":
            return {
                ...state,
                cart: [...cart, { ...payload, qty: 1 }],
            };
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: [cart.filter((item) => item._id !== currentId)],
            };
        case "MOVE_TO_CART":
            return {
                ...state,
                cart: [...cart, { ...payload, qty: 1 }],
                wishlist: [wishlist.filter((item) => item._id !== currentId)],
            };
        case "INCREASE_CART_QUANTITY":
            return {
                ...state,
                cart: [
                    cart.map((item) =>
                        item._id === currentId
                            ? { ...item, qty: qty + 1 }
                            : item
                    ),
                ],
            };
        case "DECREASE_CART_QUANTITY":
            return {
                ...state,
                cart: [
                    cart.map((item) =>
                        item._id === currentId
                            ? { ...item, qty: qty - 1 }
                            : item
                    ),
                ],
            };
        case "ADD_T0_WISHLIST":
            return {
                ...state,
                wishlist: [...wishlist, payload],
            };
        case "REMOVE_FROM_WISHLIST":
            return {
                ...state,
                wishlist: [wishlist.filter((item) => item._id !== currentId)],
            };
        case "MOVE_TO_WISHLIST":
            return {
                ...state,
                cart: [cart.filter((item) => item._id !== currentId)],
                wishlist: [...wishlist, payload],
            };

        default:
            return state;
    }
};
