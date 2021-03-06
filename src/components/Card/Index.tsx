import { useCartWishlist } from "contexts/cart-wishlist-context";
import { useAuth } from "contexts/auth-context";
import { useLoader } from "contexts/loader-context";
import { CardBadge } from "./CardBadge";
import { CardDismiss } from "./CardDismiss";
import { moveToWishlist } from "utility-functions/CartAndWishlistHandlers/moveToWishlist";
import { moveToCart } from "utility-functions/CartAndWishlistHandlers/moveToCart";
import { removeFromWishlist } from "utility-functions/CartAndWishlistHandlers/removeFromWishlist";
import { addToWishlist } from "utility-functions/CartAndWishlistHandlers/addToWishlist";
import { removeFromCart } from "utility-functions/CartAndWishlistHandlers/removeFromCart";
import { decreaseCartQty } from "utility-functions/CartAndWishlistHandlers/decreaseCartQty";
import { increaseCartQty } from "utility-functions/CartAndWishlistHandlers/increaseCartQty";
import { addToCart } from "utility-functions/CartAndWishlistHandlers/addToCart";
import { OutOfStockOverlay } from "./OutOfStockOverLay";
import { CardBody } from "./CardBody";
import { Product } from "types/Product";
import { CardFooter } from "./CardFooter";

export type CardTypes = "cart" | "wishlist" | "listing";

interface CommonCardProps {
    type: CardTypes;
    productData: Product;
    badge?: string;
    hz?: boolean;
}
interface CartCard extends CommonCardProps {
    type: "cart";
    cartQuantity: number;
}
interface WishlistCard extends CommonCardProps {
    type: "wishlist";
}
interface ListingCard extends CommonCardProps {
    type: "listing";
    inCart: boolean;
    inWishlist: boolean;
}

type CardProps = CartCard | WishlistCard | ListingCard;

export const Card: React.FC<CardProps> = (props) => {
    const { cartWishlistDispatch: dispatch } = useCartWishlist();
    const { authState } = useAuth();
    const token = authState.isLoggedIn ? authState.token : "";
    const { showLoader, hideLoader } = useLoader();
    return (
        <div className={`card shadow-sm ${props.hz ? "card--hz" : ""}`}>
            {props.badge && <CardBadge badge={props.badge} />}

            {(props.type === "cart" || props.type === "wishlist") && (
                <CardDismiss
                    type={props.type}
                    removeFromCartHandler={() =>
                        removeFromCart(
                            props.productData,
                            token,
                            dispatch,
                            showLoader,
                            hideLoader
                        )
                    }
                    removeFromWishlistHandler={() =>
                        removeFromWishlist(
                            props.productData,
                            token,
                            dispatch,
                            showLoader,
                            hideLoader
                        )
                    }
                />
            )}

            {props.productData.outOfStock && <OutOfStockOverlay />}

            <CardBody productData={props.productData} type={props.type} />

            <CardFooter
                type={props.type}
                moveToCartHandler={() =>
                    moveToCart(
                        props.productData,
                        token,
                        dispatch,
                        showLoader,
                        hideLoader
                    )
                }
                removeFromWishllistHandler={() =>
                    removeFromWishlist(
                        props.productData,
                        token,
                        dispatch,
                        showLoader,
                        hideLoader
                    )
                }
                addToCartHandler={() =>
                    addToCart(
                        props.productData,
                        dispatch,
                        token,
                        showLoader,
                        hideLoader
                    )
                }
                addToWishlistHandler={() =>
                    addToWishlist(
                        props.productData,
                        token,
                        dispatch,
                        showLoader,
                        hideLoader
                    )
                }
                decreaseCartQtyHandler={() =>
                    decreaseCartQty(
                        props.productData,
                        token,
                        dispatch,
                        showLoader,
                        hideLoader
                    )
                }
                increaseCartQtyHandler={() =>
                    increaseCartQty(
                        props.productData,
                        token,
                        dispatch,
                        showLoader,
                        hideLoader
                    )
                }
                moveToWishlistHandler={() =>
                    moveToWishlist(
                        props.productData,
                        token,
                        dispatch,
                        showLoader,
                        hideLoader
                    )
                }
                inCart={props.type === "listing" ? props.inCart : undefined}
                inWishlist={
                    props.type === "listing" ? props.inWishlist : undefined
                }
                cartQuantity={
                    props.type === "cart" ? props.cartQuantity : undefined
                }
            />
        </div>
    );
};
