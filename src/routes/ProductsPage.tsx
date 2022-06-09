import { Card } from "components/Card/Index";
import { FilterOptions } from "components/Filter/FilterOptions";
import "styles/productpage.css";
import { useEffect } from "react";
import axios from "axios";
import { useFilter } from "contexts/filter-context";
import { useCartWishlist } from "contexts/cart-wishlist-context";
import {
    inCart,
    inWishlist,
} from "utility-functions/CartAndWishlistHandlers/inCart";
import { useSearchParams } from "react-router-dom";

export const ProductsPage = () => {
    const {
        filterState: {
            data: { processed: products },
        },
        filterDispatch,
    } = useFilter();
    const {
        cartWishlistState: { cart, wishlist },
    } = useCartWishlist();
    const [searchParams, setSearchParams] = useSearchParams();
    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get("/api/products");
                filterDispatch({
                    type: "LOAD_DATA",
                    payload: response.data.products,
                });
            } catch (error) {}
        })();
    }, [filterDispatch]);

    useEffect(() => {
        const categoryQuery = searchParams.get("category");
        if (categoryQuery && products.length) {
            filterDispatch({
                type: "CATEGORY",
                payload: categoryQuery,
            });
            setSearchParams({}, { replace: true });
        }
    }, [searchParams, filterDispatch, products, setSearchParams]);

    return (
        <div className="product-content">
            <FilterOptions />
            <div className="product-card-container">
                <h3 className="w-100p ms-3">
                    Showing {products.length} products
                </h3>
                {products.map((product) => (
                    <Card
                        key={product._id}
                        type="listing"
                        productData={product}
                        badge={product.rating + " Stars"}
                        inCart={inCart(product, cart)}
                        inWishlist={inWishlist(product, wishlist)}
                    />
                ))}
            </div>
        </div>
    );
};