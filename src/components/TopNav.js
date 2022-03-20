import { Badge } from "./Badge";
import { NavLink } from "react-router-dom";
export const TopNav = ({}) => {
    const activeClass = ({ isActive }) =>
        isActive ? "nav-bar__liink--active" : "";
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
                />
                <div className="nav-bar__search-btn btn btn--icon">
                    <i className="fas fa-search"></i>
                </div>
            </div>
            <button
                className="nav-bar__toggle btn btn--icon-lg clr-white br-2 ms-2"
                data-toggle="#nav-links">
                <i className="nav-bar__toggle-icon fas fa-bars"></i>
            </button>
            <ul
                className="ms-auto nav-bar__list-group clr-white"
                id="nav-links">
                <li className="nav-bar__list-item mx-3">
                    <NavLink
                        to="/wishlist"
                        className={`nav-bar__link ${activeClass}`}>
                        <i className="far fa-heart"></i>
                        <Badge position="top-right" count="555" />
                    </NavLink>
                </li>
                <li className="nav-bar__list-item mx-3">
                    <NavLink
                        to="/cart"
                        className={`nav-bar__link ${activeClass}`}>
                        <i className="fas fa-shopping-cart"></i>
                    </NavLink>
                </li>
                <li className="nav-bar__list-item mx-3">
                    <NavLink
                        to="/sign-in"
                        className={`nav-bar__link ${activeClass}`}>
                        Sign In
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};
