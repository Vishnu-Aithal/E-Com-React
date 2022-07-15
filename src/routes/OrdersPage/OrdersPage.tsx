import { OrderDisplay } from "components/Order/OrderDisplay";
import { useUser } from "contexts/user-context";
import { useEffect, useState } from "react";
import { Order } from "types/Order";
import classes from "./OrdersPage.module.css";

export const OrdersPage: React.FC = () => {
    const {
        userState: { orders },
    } = useUser();
    const [sortedOrders, setSortedOrders] = useState<Order[]>([]);
    useEffect(() => {
        let sorted = [...orders];
        sorted.sort(
            (a, b) =>
                Date.parse(b.createdAt || "") - Date.parse(a.createdAt || "")
        );
        setSortedOrders(sorted);
    }, [orders]);
    return (
        <div className={classes["container"]}>
            {sortedOrders.length === 0 && <h3>No Orders Placed</h3>}
            {sortedOrders.map((order) => (
                <OrderDisplay order={order} key={order._id} />
            ))}
        </div>
    );
};
