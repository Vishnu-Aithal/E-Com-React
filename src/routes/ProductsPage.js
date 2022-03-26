import { Card } from "components/Card";
import { FilterOptions } from "components/FilterOptions";
import "styles/productpage.css";
import { useEffect } from "react";
import axios from "axios";
import { useFilter } from "contexts/filter-context";
export const ProductsPage = () => {
    const {
        filterState: {
            data: { processed: products },
        },
        filterDispatch,
    } = useFilter();
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
                    />
                ))}
            </div>
        </div>
    );
};
