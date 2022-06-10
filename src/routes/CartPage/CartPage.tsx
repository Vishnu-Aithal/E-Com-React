import classes from "./CartPage.module.css";
import { Card } from "components/Card/Index";
import { CartInfo } from "components/CartInfo/CartInfo";
import { useCartWishlist } from "contexts/cart-wishlist-context";
export const CartPage: React.FC = () => {
    const {
        cartWishlistState: { cart },
    } = useCartWishlist();
    return (
        <div className={classes["cart-content"]}>
            <div className={`${classes["cart-card-container"]} m-3`}>
                {cart.length === 0 && (
                    <h3 className="w-100p text-center">
                        Add Items to Cart to view it Here
                    </h3>
                )}
                {cart.map((item) => (
                    <Card
                        key={item._id}
                        productData={item}
                        type="cart"
                        cartQuantity={item.qty}
                        hz
                    />
                ))}
            </div>
            {cart.length !== 0 && <CartInfo cart={cart} />}
        </div>
    );
};
