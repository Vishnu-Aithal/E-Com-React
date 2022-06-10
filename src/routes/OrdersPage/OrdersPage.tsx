import { OrderDisplay } from "components/Order/OrderDisplay";
import { useUser } from "contexts/user-context";
import classes from "./OrdersPage.module.css";

export const OrdersPage: React.FC = () => {
    const {
        userState: { orders },
    } = useUser();
    return (
        <div className={classes["container"]}>
            {orders.length === 0 && <h3>No Orders Placed</h3>}
            {orders.map((order) => (
                <OrderDisplay order={order} key={order._id} />
            ))}
        </div>
    );
};
