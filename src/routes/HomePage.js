import "styles/homepage.css";
import { Hero } from "../components/Hero";
import { HighlightCategory } from "../components/HighlightCategory";
import heroImage from "../assets/images/wardrobe.jpg";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export const HomePage = () => {
    const [categories, setCategories] = useState([]);
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
                {categories.map((category, index) => (
                    <HighlightCategory key={index} categoryData={category} />
                ))}
            </div>
        </div>
    );
};
