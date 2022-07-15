import { useNavigate } from "react-router-dom";
import { StyledHero } from "./styled-Hero";
interface HeroProps {
    backgroundImage: string;
}
export const Hero: React.FC<HeroProps> = ({
    backgroundImage = "https://picsum.photos/1920/1080",
}) => {
    const navigate = useNavigate();
    return (
        <StyledHero.Container
            className="clr-white text-center br-1 my-4 m-2"
            style={{ backgroundImage: `url(${backgroundImage})` }}>
            <StyledHero.Heading className="heading-lg text-bold">
                Stock Your Wardrobe Now!
            </StyledHero.Heading>
            <button
                className="btn btn--link btn--lg btn--primary br-3 text-lg shadow-md-hover"
                onClick={() => navigate("/products")}>
                Shop Now
            </button>
        </StyledHero.Container>
    );
};
