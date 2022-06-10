import { CartProduct, Product } from "types/Product";

interface LoadDataAction {
    type: "LOAD_DATA";
    payload: { cart: CartProduct[]; wishlist: Product[] };
}
interface SetCartAction {
    type: "SET_CART";
    payload: CartProduct[];
}
interface SetWhishlistAction {
    type: "SET_WISHLIST";
    payload: Product[];
}

export type CartWishlistActions =
    | LoadDataAction
    | SetCartAction
    | SetWhishlistAction;
