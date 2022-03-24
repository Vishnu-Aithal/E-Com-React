import { Card } from "components/Card";
import { FilterOptions } from "components/FilterOptions";
import "styles/productpage.css";
export const ProductsPage = () => {
    return (
        <div className="product-content">
            <FilterOptions />
            <div className="product-card-container">
                <Card type="listing" />
                <Card type="listing" />
                <Card type="listing" />
                <Card type="listing" />
                <Card type="listing" />
                <Card type="listing" />
            </div>
        </div>
    );
};
