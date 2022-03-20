export const Hero = ({
    backgroundImage = "https://picsum.photos/1920/1080",
}) => {
    return (
        <div
            className="hero clr-white text-center br-1 my-4 m-2"
            style={{ backgroundImage: `url(${backgroundImage})` }}>
            <h1 className="hero__heading heading-lg text-bold">
                Stock Your Wardrobe Now!
            </h1>
            <a
                href="/pages/product-listing.html"
                className="btn--link btn--lg btn--primary br-3 text-lg shadow-md-hover">
                Shop Now
            </a>
        </div>
    );
};
