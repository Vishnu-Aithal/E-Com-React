import "../styles/wishlist.css";
import { Card } from "../components/Card";
import {
    removeFromWishlist,
    moveToCart,
} from "utility-functions/cartWishllistHandler";
import { useCartWishlist } from "contexts/cart-wishlist-context";

export const WishlistPage = () => {
    const {
        cartWishlistState: { wishlist },
    } = useCartWishlist();

    return (
        <div className="wishlist-content">
            <div className="wishlist-card-container">
                {wishlist.length === 0 && (
                    <h3 className="w-100p text-center">
                        {" "}
                        Add Items to Wishlist to view it Here
                    </h3>
                )}
                {wishlist.map((item) => (
                    <Card
                        key={item._id}
                        productData={item}
                        type="wishlist"
                        removeFromWishlist={removeFromWishlist}
                        moveToCart={moveToCart}
                    />
                ))}
            </div>
        </div>
    );
};
