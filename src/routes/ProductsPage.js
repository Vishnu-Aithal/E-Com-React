import { Card } from "components/Card";
import { FilterOptions } from "components/FilterOptions";
import { TopNav } from "components/TopNav";
import "styles/productpage.css";
export const ProductsPage = () => {
    return (
        <main>
            <TopNav />
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
        </main>
    );
};
