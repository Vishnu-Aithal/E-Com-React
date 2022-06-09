import { CartProduct, Product } from "types/Product";

export const inCart = (item: Product, cart: CartProduct[]) => {
    return cart.findIndex((cartItem) => cartItem._id === item._id) !== -1;
};
export const inWishlist = (item: Product, wishlist: Product[]) => {
    return (
        wishlist.findIndex((wishlistItem) => wishlistItem._id === item._id) !==
        -1
    );
};
