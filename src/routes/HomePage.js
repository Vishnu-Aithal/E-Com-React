import "styles/homepage.css";
import { Hero } from "../components/Hero";
import { HighlightCategory } from "../components/HighlightCategory";
import heroImage from "../assets/images/wardrobe.jpg";
import { TopNav } from "components/TopNav";
export const HomePage = () => {
    return (
        <>
            <TopNav />
            <Hero backgroundImage={heroImage} />
            <div className="highlight">
                <HighlightCategory />
                <HighlightCategory />
            </div>
        </>
    );
};
