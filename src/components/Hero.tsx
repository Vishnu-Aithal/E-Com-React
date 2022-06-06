import { useNavigate } from "react-router-dom";
export const Hero = ({
    backgroundImage = "https://picsum.photos/1920/1080",
}) => {
    const navigate = useNavigate();
    return (
        <div
            className="hero clr-white text-center br-1 my-4 m-2"
            style={{ backgroundImage: `url(${backgroundImage})` }}>
            <h1 className="hero__heading heading-lg text-bold">
                Stock Your Wardrobe Now!
            </h1>
            <button
                href="/pages/product-listing.html"
                className="btn--link btn--lg btn--primary br-3 text-lg shadow-md-hover"
                onClick={() => navigate("/products")}>
                Shop Now
            </button>
        </div>
    );
};
