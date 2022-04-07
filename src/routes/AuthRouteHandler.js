import App from "App";
import { Route, Routes } from "react-router-dom";
import { ProtectedAuth, ProtectedRoute } from "./ProtectedRoute";
import { CartPage } from "routes/CartPage.js";
import { HomePage } from "routes/HomePage.js";
import { WishlistPage } from "routes/WishlistPage.js";
import { SignInPage } from "routes/SignInPage";
import { SignUpPage } from "routes/SignUpPage";
import { ProductsPage } from "routes/ProductsPage";
import { useAuth } from "contexts/auth-context";

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
                </Route>
                <Route element={<ProtectedAuth isLoggedIn={isLoggedIn} />}>
                    <Route path="/sign-in" element={<SignInPage />} />
                    <Route path="/sign-up" element={<SignUpPage />} />
                </Route>
            </Route>
        </Routes>
    );
};
