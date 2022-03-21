import "../styles/wishlist.css";
import { Card } from "../components/Card";
import { TopNav } from "components/TopNav";

export const WishlistPage = () => {
    return (
        <main>
            <TopNav />
            <div className="wishlist-content">
                <div className="wishlist-card-container">
                    <Card type="wishlist" />
                    <Card type="wishlist" />
                    <Card type="wishlist" />
                    <Card type="wishlist" />
                    <Card type="wishlist" />
                </div>
            </div>
        </main>
    );
};
