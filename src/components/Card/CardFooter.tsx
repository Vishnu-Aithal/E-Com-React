import { useAuth } from "contexts/auth-context";
import { useLocation, useNavigate } from "react-router-dom";
import { CardTypes } from "./Index";

interface CardFooterProps {
    type: CardTypes;
    inCart?: boolean;
    inWishlist?: boolean;
    cartQuantity?: number;
    addToCartHandler: () => void;
    moveToCartHandler: () => void;
    addToWishlistHandler: () => void;
    moveToWishlistHandler: () => void;
    increaseCartQtyHandler: () => void;
    decreaseCartQtyHandler: () => void;
    removeFromWishllistHandler: () => void;
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
    const {
        authState: { isLoggedIn },
    } = useAuth();
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
                                            isLoggedIn
                                                ? moveToCartHandler()
                                                : navigate("/sign-in", {
                                                      state: {
                                                          from: location.pathname,
                                                      },
                                                  })
                                        }>
                                        Move to Cart
                                    </button>
                                    <button
                                        className="btn btn--icon clr-red ms-1"
                                        onClick={() =>
                                            isLoggedIn
                                                ? removeFromWishllistHandler()
                                                : navigate("/sign-in", {
                                                      state: {
                                                          from: location.pathname,
                                                      },
                                                  })
                                        }>
                                        <i className="fas fa-heart"></i>
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button
                                        className="btn btn--primary w-100p"
                                        onClick={() =>
                                            isLoggedIn
                                                ? addToCartHandler()
                                                : navigate("/sign-in", {
                                                      state: {
                                                          from: location.pathname,
                                                      },
                                                  })
                                        }>
                                        Add to Cart
                                    </button>
                                    <button
                                        className="btn btn--icon clr-red ms-1"
                                        onClick={() =>
                                            isLoggedIn
                                                ? addToWishlistHandler()
                                                : navigate("/sign-in", {
                                                      state: {
                                                          from: location.pathname,
                                                      },
                                                  })
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
                            isLoggedIn
                                ? moveToCartHandler()
                                : navigate("/sign-in", {
                                      state: { from: location.pathname },
                                  })
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
                            isLoggedIn
                                ? moveToWishlistHandler()
                                : navigate("/sign-in", {
                                      state: { from: location.pathname },
                                  })
                        }>
                        Move to Wishlist
                    </button>
                    <div className="card__quantity ms-auto">
                        <button
                            className="btn btn--icon"
                            disabled={cartQuantity ? cartQuantity <= 1 : true}
                            onClick={() =>
                                isLoggedIn
                                    ? decreaseCartQtyHandler()
                                    : navigate("/sign-in", {
                                          state: { from: location.pathname },
                                      })
                            }>
                            -
                        </button>
                        <p className="card__item-count">{cartQuantity}</p>
                        <button
                            className="btn btn--icon"
                            onClick={() =>
                                isLoggedIn
                                    ? increaseCartQtyHandler()
                                    : navigate("/sign-in", {
                                          state: { from: location.pathname },
                                      })
                            }>
                            +
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};
