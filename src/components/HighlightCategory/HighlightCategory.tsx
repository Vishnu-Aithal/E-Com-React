import { useNavigate } from "react-router-dom";
import { Category } from "types/Category";
import { StyledHighlight } from "./styled-HighlightCategory";
export const HighlightCategory: React.FC<{ categoryData: Category }> = ({
    categoryData,
}) => {
    const navigate = useNavigate();
    return (
        <StyledHighlight.Item className="p-2 shadow-sm">
            <StyledHighlight.ImageWrapper>
                <img
                    className="img-responsive"
                    src={categoryData.image}
                    alt="formal-set"
                />
            </StyledHighlight.ImageWrapper>
            <StyledHighlight.ItemText className="p-5">
                <h3 className="heading-sm mt-4 clr-primary">
                    {categoryData.highlight}
                </h3>
                <p className="heading-xs text-bold mt-auto">
                    {categoryData.title}
                </p>
                <p>{categoryData.description}</p>
                <button
                    onClick={() =>
                        navigate(`/products?category=${categoryData.name}`)
                    }
                    className="mt-3 btn btn--link btn--secondary text-center">
                    Browse Now
                </button>
            </StyledHighlight.ItemText>
        </StyledHighlight.Item>
    );
};
