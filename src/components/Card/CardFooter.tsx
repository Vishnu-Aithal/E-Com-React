import { useAuth } from "contexts/auth-context";
import { useToast } from "contexts/toast-context";
import { useLocation, useNavigate } from "react-router-dom";
import { CardTypes } from "./Index";

interface CardFooterProps {
    type: CardTypes;
    inCart?: boolean;
    inWishlist?: boolean;
    cartQuantity?: number;
    addToCartHandler: () => Promise<unknown>;
    moveToCartHandler: () => Promise<unknown>;
    addToWishlistHandler: () => Promise<unknown>;
    moveToWishlistHandler: () => Promise<unknown>;
    increaseCartQtyHandler: () => Promise<unknown>;
    decreaseCartQtyHandler: () => Promise<unknown>;
    removeFromWishllistHandler: () => Promise<unknown>;
}

export const CardFooter: React.FC<CardFooterProps> = (props) => {
    const {
        type,
        addToCartHandler,
        moveToCartHandler,
        addToWishlistHandler,
        moveToWishlistHandler,
        increaseCartQtyHandler,
        decreaseCartQtyHandler,
        removeFromWishllistHandler,
        cartQuantity,
        inCart,
        inWishlist,
    } = props;
    const navigate = useNavigate();
    const location = useLocation();
    const { showToast } = useToast();
    const {
        authState: { isLoggedIn },
    } = useAuth();

    const handleEvent = async (
        callback: () => {},
        successMessage: string,
        errorMessage: string
    ) => {
        if (isLoggedIn) {
            const error = await callback();
            if (error) {
                showToast({ title: errorMessage, type: "error" });
            } else {
                showToast({ title: successMessage, type: "success" });
            }
        } else {
            navigate("/sign-in", {
                state: {
                    from: location.pathname,
                },
            });
        }
    };
    return (
        <>
            {type === "listing" && (
                <div className="card__cta-wrapper p-2">
                    {inCart ? (
                        <button
                            className="btn btn--outline-primary w-100p"
                            onClick={() => navigate("/cart")}>
                            Go to Cart
                        </button>
                    ) : (
                        <>
                            {inWishlist ? (
                                <>
                                    <button
                                        className="btn btn--secondary w-100p"
                                        onClick={() =>
                                            handleEvent(
                                                moveToCartHandler,
                                                "Moved To Cart",
                                                "Failed to move to cart"
                                            )
                                        }>
                                        Move to Cart
                                    </button>
                                    <button
                                        className="btn btn--icon clr-red ms-1"
                                        onClick={() =>
                                            handleEvent(
                                                removeFromWishllistHandler,
                                                "Removed From Wishlist",
                                                "Failed to Remove From Wishlist"
                                            )
                                        }>
                                        <i className="fas fa-heart"></i>
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button
                                        className="btn btn--primary w-100p"
                                        onClick={() =>
                                            handleEvent(
                                                addToCartHandler,
                                                "Added to Cart",
                                                "Failed to add to cart"
                                            )
                                        }>
                                        Add to Cart
                                    </button>
                                    <button
                                        className="btn btn--icon clr-red ms-1"
                                        onClick={() =>
                                            handleEvent(
                                                addToWishlistHandler,
                                                "Added to Wishlist",
                                                "Failed to Add to Wishlist"
                                            )
                                        }>
                                        <i className="far fa-heart"></i>
                                    </button>
                                </>
                            )}
                        </>
                    )}
                </div>
            )}
            {type === "wishlist" && (
                <div className="card__cta-wrapper p-2">
                    <button
                        className="btn btn--secondary mx-1 w-100p"
                        onClick={() =>
                            handleEvent(
                                moveToCartHandler,
                                "Moved to Cart",
                                "Failed to Move to Cart"
                            )
                        }>
                        Move to Cart
                    </button>
                </div>
            )}
            {type === "cart" && (
                <div className="card__cta-wrapper p-2">
                    <button
                        className="btn btn--outline-secondary mx-1"
                        onClick={() =>
                            handleEvent(
                                moveToWishlistHandler,
                                "Moved to Wishlist",
                                "Failed to Move to Wishlist"
                            )
                        }>
                        Move to Wishlist
                    </button>
                    <div className="card__quantity ms-auto">
                        <button
                            className="btn btn--icon"
                            disabled={cartQuantity ? cartQuantity <= 1 : true}
                            onClick={() =>
                                handleEvent(
                                    decreaseCartQtyHandler,
                                    "Decreased Quantity",
                                    "Failed to Decrease Qunatity"
                                )
                            }>
                            -
                        </button>
                        <p className="card__item-count">{cartQuantity}</p>
                        <button
                            className="btn btn--icon"
                            onClick={() =>
                                handleEvent(
                                    increaseCartQtyHandler,
                                    "Increased Quantity",
                                    "Failed to Increase Quantity"
                                )
                            }>
                            +
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};
