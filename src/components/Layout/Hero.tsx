import { useNavigate } from "react-router-dom";
import classes from "./Hero.module.css";
interface HeroProps {
    backgroundImage: string;
}
export const Hero: React.FC<HeroProps> = ({
    backgroundImage = "https://picsum.photos/1920/1080",
}) => {
    const navigate = useNavigate();
    return (
        <div
            className={`${classes["hero"]} clr-white text-center br-1 my-4 m-2`}
            style={{ backgroundImage: `url(${backgroundImage})` }}>
            <h1 className={`${classes["hero__heading"]} heading-lg text-bold`}>
                Stock Your Wardrobe Now!
            </h1>
            <button
                className="btn--link btn--lg btn--primary br-3 text-lg shadow-md-hover"
                onClick={() => navigate("/products")}>
                Shop Now
            </button>
        </div>
    );
};
