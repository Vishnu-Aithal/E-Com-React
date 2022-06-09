import "styles/homepage.css";
import { Hero } from "../components/Layout/Hero";
import { HighlightCategory } from "../components/HighlightCategory";
import heroImage from "../assets/images/wardrobe.jpg";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Category } from "types/Category";

export const HomePage: React.FC = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get("/api/categories");
                setCategories(response.data.categories);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);
    return (
        <div className="homepage-content">
            <Hero backgroundImage={heroImage} />
            <div className="highlight">
                {categories.map((category) => (
                    <HighlightCategory
                        key={category._id}
                        categoryData={category}
                    />
                ))}
            </div>
        </div>
    );
};