import { useNavigate } from "react-router-dom";
import { Category } from "types/Category";
export const HighlightCategory: React.FC<{ categoryData: Category }> = ({
    categoryData,
}) => {
    const navigate = useNavigate();
    return (
        <div className="highlight__item p-2 shadow-sm">
            <div className="highlight__image-wrapper">
                <img
                    className="img-responsive"
                    src={categoryData.image}
                    alt="formal-set"
                />
            </div>
            <div className="highlight__item-text p-5">
                <h3 className="heading-sm mt-4 clr-primary">
                    {categoryData.highlight}
                </h3>
                <p className="heading-xs text-bold mt-auto">
                    {categoryData.title}
                </p>
                <p>{categoryData.description}</p>
                <button
                    onClick={() => navigate("/products")}
                    className="mt-3 btn btn--link btn--secondary text-center">
                    Browse Now
                </button>
            </div>
        </div>
    );
};
