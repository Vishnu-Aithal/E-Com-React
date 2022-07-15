import { Order } from "types/Order";
import { StyledOrder } from "./styled-Order";

export const OrderDisplay: React.FC<{ order: Order }> = ({ order }) => {
    return (
        <StyledOrder.Container>
            <p className="text-md text-semi-bold text-end">
                Order : {order._id}
            </p>
            <p className="text-semi-bold">Products :</p>
            <StyledOrder.ProductList>
                {order.products.map((product) => (
                    <li key={product._id} className="br-1 my-1">
                        <p>{`${product.title} - ${product.brand}`}</p>
                        <p className="text-sm">{`Quantity - ${product.qty}`}</p>
                    </li>
                ))}
            </StyledOrder.ProductList>
            <p className="ms-2 mb-2 text-bold">{`Total - ${order.total}₹`}</p>
            <p className="text-semi-bold">{`Delivering to - ${order.address.name}`}</p>
            <p className="text-end text-sm text-semi-bold">
                Placed at: {new Date(order.createdAt || " ").toLocaleString()}
            </p>
        </StyledOrder.Container>
    );
};
