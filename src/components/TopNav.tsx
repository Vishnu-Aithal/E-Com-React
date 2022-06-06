import { Badge } from "./Badge";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "contexts/auth-context";
import { signOutHandler } from "utility-functions/authHandler";
import { useCartWishlist } from "contexts/cart-wishlist-context";
import { useLoader } from "contexts/loader-context";
import { useFilter } from "contexts/filter-context";

export const TopNav = ({}) => {
    const [collapsed, setCollapsed] = useState(true);
    const {
        authState: { isLoggedIn },
        authDispatch,
    } = useAuth();
    const activeClass = ({ isActive }) =>
        isActive ? "nav-bar__link nav-bar__link--active" : "nav-bar__link";
    const {
        cartWishlistState: { cart, wishlist },
    } = useCartWishlist();
    const { filterDispatch } = useFilter();
    const { showLoader, hideLoader } = useLoader();
    const navigate = useNavigate();
    const location = useLocation();
    const [searchTerm, setSearchTerm] = useState("");
    useEffect(
        () => filterDispatch({ type: "SET_SEARCH_TERM", payload: searchTerm }),
        [searchTerm]
    );
    useEffect(
        () => location.pathname !== "/products" && setSearchTerm(""),
        [location]
    );
    return (
        <nav className="nav-bar bg-primary shadow-sm">
            <div className="nav-bar__header heading-md text-bold clr-white me-2">
                <NavLink className="nav-bar__link" to="/">
                    Store
                </NavLink>
            </div>
            <div className="nav-bar__search-wrapper ms-auto br-4 shadow-xs">
                <input
                    className="nav-bar__search-input p-2 br-3"
                    type="search"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => {
                        location.pathname !== "/products" &&
                            navigate("/products");
                        setSearchTerm(e.target.value);
                    }}
                />
            </div>
            <button
                className={`nav-bar__toggle btn btn--icon-lg clr-white br-2 ms-2 ${
                    collapsed ? "" : "active"
                }`}
                onClick={() => setCollapsed((collapsed) => !collapsed)}>
                <i className="nav-bar__toggle-icon fas fa-bars"></i>
            </button>
            <ul
                className={`ms-auto nav-bar__list-group clr-white ${
                    collapsed ? "" : "show"
                }`}>
                <li className="nav-bar__list-item mx-3">
                    <NavLink to="/wishlist" className={activeClass}>
                        <i className="far fa-heart"></i>
                        {wishlist.length !== 0 && (
                            <Badge
                                position="top-right"
                                count={wishlist.length}
                            />
                        )}
                    </NavLink>
                </li>
                <li className="nav-bar__list-item mx-3">
                    <NavLink to="/cart" className={activeClass}>
                        <i className="fas fa-shopping-cart"></i>
                        {cart.length !== 0 && (
                            <Badge position="top-right" count={cart.length} />
                        )}
                    </NavLink>
                </li>
                <li className="nav-bar__list-item mx-3">
                    {isLoggedIn ? (
                        <div
                            onClick={() => {
                                signOutHandler(showLoader, hideLoader);
                                authDispatch({ type: "LOGOUT" });
                                setTimeout(() => navigate("/"), 600);
                            }}>
                            Sign Out
                        </div>
                    ) : (
                        <NavLink to="/sign-in" className={activeClass}>
                            Sign In
                        </NavLink>
                    )}
                </li>
            </ul>
        </nav>
    );
};
