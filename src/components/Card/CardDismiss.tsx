import { useAuth } from "contexts/auth-context";
import { useLocation, useNavigate } from "react-router-dom";

interface CardDismissProps {
    type: "cart" | "wishlist";
    removeFromCartHandler: () => void;
    removeFromWishlistHandler: () => void;
}

export const CardDismiss: React.FC<CardDismissProps> = ({
    type,
    removeFromCartHandler,
    removeFromWishlistHandler,
}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const {
        authState: { isLoggedIn },
    } = useAuth();
    return (
        <div
            className="card__dismiss"
            onClick={() =>
                isLoggedIn
                    ? type === "cart"
                        ? removeFromCartHandler()
                        : removeFromWishlistHandler()
                    : navigate("/sign-in", {
                          state: { from: location.pathname },
                      })
            }>
            <i className="fas fa-times clr-black"></i>
        </div>
    );
};
