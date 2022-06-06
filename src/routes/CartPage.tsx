import "../styles/cartpage.css";
import { Card } from "../components/Card";
import { CartInfo } from "../components/CartInfo";
import {
    increaseCartQty,
    decreaseCartQty,
    removeFromCart,
    moveToWishlist,
} from "utility-functions/cartWishllistHandler";
import { useCartWishlist } from "contexts/cart-wishlist-context";
export const CartPage = () => {
    const {
        cartWishlistState: { cart },
    } = useCartWishlist();
    return (
        <div className="cart-content">
            <div className="cart-card-container m-3">
                {cart.length === 0 && (
                    <h3 className="w-100p text-center">
                        Add Items to Cart to view it Here
                    </h3>
                )}
                {cart.map((item) => (
                    <Card
                        key={item.id}
                        productData={item}
                        type="cart"
                        increaseQuantity={increaseCartQty}
                        decreaseQuantity={decreaseCartQty}
                        removeFromCart={removeFromCart}
                        cartQuantity={item.qty}
                        moveToWishlist={moveToWishlist}
                    />
                ))}
            </div>
            {cart.length !== 0 && <CartInfo cart={cart} />}
        </div>
    );
};
