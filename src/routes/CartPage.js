import "../styles/cartpage.css";
import { Card } from "../components/Card";
import { CartInfo } from "../components/CartInfo";
import { TopNav } from "components/TopNav";
export const CartPage = () => {
    return (
        <main>
            <TopNav />
            <div className="cart-content">
                <div className="cart-card-container m-3">
                    <Card type="cart" />
                    <Card type="cart" />
                    <Card type="cart" />
                    <Card type="cart" />
                    <Card type="cart" />
                    <Card type="cart" />
                    <Card type="cart" />
                    <Card type="cart" />
                </div>
                <CartInfo />
            </div>
        </main>
    );
};
