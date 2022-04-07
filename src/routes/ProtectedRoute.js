import { Navigate, Outlet, useLocation } from "react-router-dom";

export const ProtectedRoute = ({ isLoggedIn }) => {
    const location = useLocation();
    return isLoggedIn ? (
        <Outlet />
    ) : (
        <Navigate to="/sign-in" state={{ from: location.pathname }} replace />
    );
};

export const ProtectedAuth = ({ isLoggedIn }) => {
    return isLoggedIn ? <Navigate to="/" replace /> : <Outlet />;
};
