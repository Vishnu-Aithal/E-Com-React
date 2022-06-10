import { useNavigate } from "react-router-dom";
import { Product } from "types/Product";
import { CardTypes } from "./Index";

interface BodyProps {
    productData: Product;
    type: CardTypes;
}

export const CardBody: React.FC<BodyProps> = ({ productData, type }) => {
    return (
        <div className="card__body p-2">
            <div className="card__img-wrapper">
                <img
                    className="card__img"
                    src={productData.image}
                    alt="product "
                />
            </div>
            <div className="card__text-wrapper ps-2">
                <h3 className="card__heading heading-xs">
                    {productData.title}
                </h3>
                <p className="text-semi-bold text-gray">
                    by {productData.brand}
                </p>
                <p className="mt-3, text-bold text-md">
                    {productData.outOfStock ? (
                        <>
                            Price: {productData.price}{" "}
                            <span className="clr-red">Out Of Stock!</span>
                        </>
                    ) : (
                        `Price: ${productData.price}`
                    )}
                </p>
            </div>
        </div>
    );
};
