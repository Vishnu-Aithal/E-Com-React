import { Hero } from "components/Layout/Hero";
import { HighlightCategory } from "components/HighlightCategory/HighlightCategory";
import heroImage from "assets/images/wardrobe.webp";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Category } from "types/Category";
import { StyledHomePage } from "./styled-HomePage";

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
        <StyledHomePage.Content>
            <Hero backgroundImage={heroImage} />
            <StyledHomePage.Highlight>
                {categories.map((category) => (
                    <HighlightCategory
                        key={category._id}
                        categoryData={category}
                    />
                ))}
            </StyledHomePage.Highlight>
        </StyledHomePage.Content>
    );
};
