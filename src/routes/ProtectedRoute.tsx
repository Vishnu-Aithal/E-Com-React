import { Navigate, Outlet, useLocation } from "react-router-dom";

export const ProtectedRoute: React.FC<{ isLoggedIn: boolean }> = ({
    isLoggedIn,
}) => {
    const location = useLocation();
    return isLoggedIn ? (
        <Outlet />
    ) : (
        <Navigate to="/sign-in" state={{ from: location }} replace />
    );
};

export const ProtectedAuth: React.FC<{ isLoggedIn: boolean }> = ({
    isLoggedIn,
}) => {
    return isLoggedIn ? <Navigate to="/products" replace /> : <Outlet />;
};
