import { Card } from "components/Card";
import { FilterOptions } from "components/FilterOptions";
import "styles/productpage.css";
import { useEffect } from "react";
import axios from "axios";
import { useFilter } from "contexts/filter-context";
import { useCartWishlist } from "contexts/cart-wishlist-context";
import {
    addToCart,
    addToWishlist,
    inWishlist,
    inCart,
    moveToCart,
    moveToWishlist,
    removeFromWishlist,
} from "utility-functions/cartWishllistHandler";
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
    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get("/api/products");
                filterDispatch({
                    type: "LOAD_DATA",
                    payload: response.data.products,
                });
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);
    return (
        <div className="product-content">
            <FilterOptions />
            <div className="product-card-container">
                <h3 className="w-100p ms-3">
                    Showing {products.length} products
                </h3>
                {products.map((product, index) => (
                    <Card
                        key={index}
                        type="listing"
                        productData={product}
                        badge={product.rating + " Stars"}
                        addToCart={addToCart}
                        addToWishlist={addToWishlist}
                        moveToCart={moveToCart}
                        moveToWishlist={moveToWishlist}
                        inCart={inCart(product, cart)}
                        removeFromWishlist={removeFromWishlist}
                        inWishlist={inWishlist(product, wishlist)}
                    />
                ))}
            </div>
        </div>
    );
};
