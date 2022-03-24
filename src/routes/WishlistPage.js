import "../styles/wishlist.css";
import { Card } from "../components/Card";

export const WishlistPage = () => {
    return (
        <div className="wishlist-content">
            <div className="wishlist-card-container">
                <Card type="wishlist" />
                <Card type="wishlist" />
                <Card type="wishlist" />
                <Card type="wishlist" />
                <Card type="wishlist" />
            </div>
        </div>
    );
};
