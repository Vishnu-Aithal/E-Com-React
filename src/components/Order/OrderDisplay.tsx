import { Order } from "types/Order";
import classes from "./OrderDisplay.module.css";

export const OrderDisplay: React.FC<{ order: Order }> = ({ order }) => {
    return (
        <div className={classes["order"]}>
            <p className="text-md text-semi-bold text-end">
                Order : {order._id}
            </p>
            <p className="text-semi-bold">Products :</p>
            <ul className="list-group list-group--spaced-box w-fit">
                {order.products.map((productName) => (
                    <li className="list__item">{productName}</li>
                ))}
            </ul>
            <p className="text-semi-bold">{`Delivering to - ${order.address.name}`}</p>
            <p className="text-end text-sm text-semi-bold">
                Placed at: {order.createdAt?.slice(0, 19)}
            </p>
        </div>
    );
};
