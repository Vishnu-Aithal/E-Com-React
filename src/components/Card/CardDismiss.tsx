import { useAuth } from "contexts/auth-context";
import { useToast } from "contexts/toast-context";
import { useLocation, useNavigate } from "react-router-dom";

interface CardDismissProps {
    type: "cart" | "wishlist";
    removeFromCartHandler: () => Promise<unknown>;
    removeFromWishlistHandler: () => Promise<unknown>;
}

export const CardDismiss: React.FC<CardDismissProps> = ({
    type,
    removeFromCartHandler,
    removeFromWishlistHandler,
}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { showToast } = useToast();
    const {
        authState: { isLoggedIn },
    } = useAuth();

    const dismissHandler = async () => {
        if (isLoggedIn) {
            if (type === "cart") {
                const error = await removeFromCartHandler();
                error
                    ? showToast({
                          title: "Failed to Remove From Cart",
                          type: "error",
                      })
                    : showToast({
                          title: "Removed From Cart",
                          type: "success",
                      });
            } else {
                const error = await removeFromWishlistHandler();
                error
                    ? showToast({
                          title: "Failed to Remove From Wishlist",
                          type: "error",
                      })
                    : showToast({
                          title: "Removed From Wishlist",
                          type: "success",
                      });
            }
        } else {
            navigate("/sign-in", {
                state: { from: location.pathname },
            });
        }
    };

    return (
        <div className="card__dismiss" onClick={dismissHandler}>
            <i className="fas fa-times clr-black"></i>
        </div>
    );
};
