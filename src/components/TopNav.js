import { Badge } from "./Badge";
export const TopNav = ({}) => {
    return (
        <nav className="nav-bar bg-primary shadow-sm">
            <div className="nav-bar__header heading-md text-bold clr-white me-2">
                <a className="nav-bar__link" href="/index.html">
                    Store
                </a>
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
                    <a href="/pages/wishlist.html" className="nav-bar__link">
                        <i className="far fa-heart"></i>
                        <Badge position="top-right" count="555" />
                    </a>
                </li>
                <li className="nav-bar__list-item mx-3">
                    <a href="/pages/cart.html" className="nav-bar__link">
                        <i className="fas fa-shopping-cart"></i>
                    </a>
                </li>
                <li className="nav-bar__list-item mx-3">
                    <a href="/pages/sign-in.html" className="nav-bar__link">
                        Sign In
                    </a>
                </li>
            </ul>
        </nav>
    );
};
