import { useNavigate } from "react-router-dom";
import { useCartWishlist } from "contexts/cart-wishlist-context";
import { useAuth } from "contexts/auth-context";
import { useLoader } from "contexts/loader-context";
export const Card = ({
    type = "home-page",
    productData = {
        outOfStock: false,
        title: "title",
        brand: "brand",
        price: "100",
        image: "https://picsum.photos/200/300",
    },
    badge = "",
    inCart = false,
    inWishlist = false,
    addToWishlist = () => {},
    moveToWishlist = () => {},
    moveToCart = () => {},
    addToCart = () => {},
    removeFromCart = () => {},
    removeFromWishlist = () => {},
    increaseQuantity = () => {},
    decreaseQuantity = () => {},
    cartQuantity = 0,
}) => {
    const navigate = useNavigate();
    const { cartWishlistDispatch: dispatch } = useCartWishlist();
    const {
        authState: { isLoggedIn, token },
    } = useAuth();
    const { showLoader, hideLoader } = useLoader();
    return (
        <div className="card shadow-sm">
            {badge && (
                <div className="card__badge bg-yellow p-1 br-2">{badge}</div>
            )}
            {type === "cart" && (
                <div
                    className="card__dismiss"
                    onClick={() =>
                        isLoggedIn
                            ? removeFromCart(
                                  productData,
                                  dispatch,
                                  token,
                                  showLoader,
                                  hideLoader
                              )
                            : navigate("/sign-in")
                    }>
                    <i className="fas fa-times clr-black"></i>
                </div>
            )}
            {type === "wishlist" && (
                <div
                    className="card__dismiss"
                    onClick={() =>
                        isLoggedIn
                            ? removeFromWishlist(
                                  productData,
                                  dispatch,
                                  token,
                                  showLoader,
                                  hideLoader
                              )
                            : navigate("/sign-in")
                    }>
                    <i className="fas fa-heart clr-red"></i>
                </div>
            )}
            {productData.outOfStock && (
                <div className="card__overlay-wrapper">
                    <p className="card__overlay-text heading-md">
                        Out Of Stock
                    </p>
                </div>
            )}
            <div className="card__body p-2">
                <div className="card__img-wrapper">
                    <img
                        className="card__img"
                        src={productData.image}
                        alt="product "
                    />
                </div>
                {type === "home-page" ? (
                    <div className="card__text-wrapper ps-2 text-center">
                        <h3 className="card__heading heading-xs">
                            {productData.title}
                        </h3>
                        <p className="text-semi-bold text-gray">
                            by {productData.brand}
                        </p>
                    </div>
                ) : (
                    <div className="card__text-wrapper ps-2">
                        <h3 className="card__heading heading-xs">
                            {productData.title}
                        </h3>
                        <p className="text-semi-bold text-gray">
                            by {productData.brand}
                        </p>
                        <p className="mt-3, text-bold text-md">
                            {productData.outOfStock ? (
                                <>
                                    Price: {productData.price}{" "}
                                    <span className="clr-red">
                                        Out Of Stock!
                                    </span>
                                </>
                            ) : (
                                `Price: ${productData.price}`
                            )}
                        </p>
                    </div>
                )}
            </div>

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
                                                ? moveToCart(
                                                      productData,
                                                      dispatch,
                                                      token,
                                                      showLoader,
                                                      hideLoader
                                                  )
                                                : navigate("/sign-in")
                                        }>
                                        Move to Cart
                                    </button>
                                    <button
                                        className="btn btn--icon clr-red ms-1"
                                        onClick={() =>
                                            isLoggedIn
                                                ? removeFromWishlist(
                                                      productData,
                                                      dispatch,
                                                      token,
                                                      showLoader,
                                                      hideLoader
                                                  )
                                                : navigate("/sign-in")
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
                                                ? addToCart(
                                                      productData,
                                                      dispatch,
                                                      token,
                                                      showLoader,
                                                      hideLoader
                                                  )
                                                : navigate("/sign-in")
                                        }>
                                        Add to Cart
                                    </button>
                                    <button
                                        className="btn btn--icon clr-red ms-1"
                                        onClick={() =>
                                            isLoggedIn
                                                ? addToWishlist(
                                                      productData,
                                                      dispatch,
                                                      token,
                                                      showLoader,
                                                      hideLoader
                                                  )
                                                : navigate("/sign-in")
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
                                ? moveToCart(
                                      productData,
                                      dispatch,
                                      token,
                                      showLoader,
                                      hideLoader
                                  )
                                : navigate("/sign-in")
                        }>
                        Move to Cart
                    </button>
                </div>
            )}
            {type === "home-page" && (
                <div className="card__cta-wrapper p-2">
                    <button
                        className="btn btn--secondary w-100p"
                        onClick={() => navigate("/products")}>
                        Shop Now
                    </button>
                </div>
            )}
            {type === "cart" && (
                <div className="card__cta-wrapper p-2">
                    <button
                        className="btn btn--outline-secondary mx-1"
                        onClick={() =>
                            isLoggedIn
                                ? moveToWishlist(
                                      productData,
                                      dispatch,
                                      token,
                                      showLoader,
                                      hideLoader
                                  )
                                : navigate("/sign-in")
                        }>
                        Move to Wishlist
                    </button>
                    <div className="card__quantity ms-auto">
                        <button
                            className="btn btn--icon"
                            disabled={cartQuantity <= 1}
                            onClick={() =>
                                isLoggedIn
                                    ? decreaseQuantity(
                                          productData,
                                          dispatch,
                                          token,
                                          showLoader,
                                          hideLoader
                                      )
                                    : navigate("/sign-in")
                            }>
                            -
                        </button>
                        <p className="card__item-count">{cartQuantity}</p>
                        <button
                            className="btn btn--icon"
                            onClick={() =>
                                isLoggedIn
                                    ? increaseQuantity(
                                          productData,
                                          dispatch,
                                          token,
                                          showLoader,
                                          hideLoader
                                      )
                                    : navigate("/sign-in")
                            }>
                            +
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
