import App from "App";
import { Route, Routes } from "react-router-dom";
import { ProtectedAuth, ProtectedRoute } from "./ProtectedRoute";
import { CartPage } from "routes/CartPage/CartPage";
import { HomePage } from "routes/HomePage/HomePage";
import { WishlistPage } from "routes/WishlistPage/WishlistPage";
import { SignInPage } from "routes/AuthPages/SignInPage";
import { SignUpPage } from "routes/AuthPages/SignUpPage";
import { ProductsPage } from "routes/ProductsPage/ProductsPage";
import { NotFound } from "./NotFound";
import { useAuth } from "contexts/auth-context";
import { CheckoutPage } from "./CheckoutPage/CheckoutPage";
import { OrdersPage } from "./OrdersPage/OrdersPage";

export const ConditionalRouter = () => {
    const {
        authState: { isLoggedIn },
    } = useAuth();
    return (
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<HomePage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/wishlist" element={<WishlistPage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                    <Route path="/orders" element={<OrdersPage />} />
                </Route>
                <Route element={<ProtectedAuth isLoggedIn={isLoggedIn} />}>
                    <Route path="/sign-in" element={<SignInPage />} />
                    <Route path="/sign-up" element={<SignUpPage />} />
                </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};
