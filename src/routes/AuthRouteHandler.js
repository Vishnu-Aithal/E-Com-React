import App from "App";
import { Route, Routes } from "react-router-dom";
import { CartPage } from "routes/CartPage.js";
import { HomePage } from "routes/HomePage.js";
import { WishlistPage } from "routes/WishlistPage.js";
import { SignInPage } from "routes/SignInPage";
import { SignUpPage } from "routes/SignUpPage";
import { ProductsPage } from "routes/ProductsPage";
import { useAuth } from "contexts/auth-context";

export const ConditionalRouter = ({ children }) => {
    const {
        authState: { isLoggedIn },
    } = useAuth();
    return (
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<HomePage />} />
                <Route
                    path="cart"
                    element={isLoggedIn ? <CartPage /> : <SignInPage />}
                />
                <Route
                    path="wishlist"
                    element={isLoggedIn ? <WishlistPage /> : <SignInPage />}
                />
                <Route
                    path="sign-in"
                    element={isLoggedIn ? <HomePage /> : <SignInPage />}
                />
                <Route
                    path="sign-up"
                    element={isLoggedIn ? <HomePage /> : <SignUpPage />}
                />
                <Route path="products" element={<ProductsPage />} />
            </Route>
        </Routes>
    );
};
