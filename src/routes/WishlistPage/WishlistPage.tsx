import classes from "./WishlistPage.module.css";
import { Card } from "components/Card/Index";
import { useCartWishlist } from "contexts/cart-wishlist-context";

export const WishlistPage = () => {
    const {
        cartWishlistState: { wishlist },
    } = useCartWishlist();

    return (
        <div className={classes["wishlist-content"]}>
            <div className={classes["wishlist-card-container"]}>
                {wishlist.length === 0 && (
                    <h3 className="w-100p text-center">
                        {" "}
                        Add Items to Wishlist to view it Here
                    </h3>
                )}
                {wishlist.map((item) => (
                    <Card key={item._id} productData={item} type="wishlist" />
                ))}
            </div>
        </div>
    );
};
