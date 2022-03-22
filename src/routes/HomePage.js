import "styles/homepage.css";
import { Hero } from "../components/Hero";
import { HighlightCategory } from "../components/HighlightCategory";
import heroImage from "../assets/images/wardrobe.jpg";

export const HomePage = () => {
    return (
        <div className="homepage-content">
            <Hero backgroundImage={heroImage} />
            <div className="highlight">
                <HighlightCategory />
                <HighlightCategory />
            </div>
        </div>
    );
};
