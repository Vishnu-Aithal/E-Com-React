import { Card } from "components/Card/Index";
import { FilterOptions } from "components/Filter/FilterOptions";
import { useEffect } from "react";
import axios from "axios";
import { useFilter } from "contexts/filter-context";
import { useCartWishlist } from "contexts/cart-wishlist-context";
import {
    inCart,
    inWishlist,
} from "utility-functions/CartAndWishlistHandlers/inCart";
import { useSearchParams } from "react-router-dom";
import { useLoader } from "contexts/loader-context";
import { useToast } from "contexts/toast-context";
import { StyledProductPage } from "./styled-ProductPage";

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
    const { showLoader, hideLoader } = useLoader();
    const { showToast } = useToast();
    useEffect(() => {
        (async () => {
            try {
                showLoader("Fetching Products");
                const response = await axios.get("/api/products");
                filterDispatch({
                    type: "LOAD_DATA",
                    payload: response.data.products,
                });
                filterDispatch({
                    type: "SET_SEARCH_TERM",
                    payload: "",
                });
            } catch (error) {
                showToast({ title: "Failed to fetch Products", type: "error" });
            } finally {
                hideLoader();
            }
        })();
    }, [filterDispatch, showLoader, hideLoader, showToast]);

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
        <StyledProductPage.Content>
            <FilterOptions />
            <StyledProductPage.Display>
                <h3 className="ps-3">Showing {products.length} products</h3>
                <StyledProductPage.CardContainer>
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
                </StyledProductPage.CardContainer>
            </StyledProductPage.Display>
        </StyledProductPage.Content>
    );
};
