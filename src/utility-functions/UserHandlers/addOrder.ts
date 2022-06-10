import axios from "axios";
import { HideLoader, ShowLoader } from "contexts/loader-context";
import { UserDispatch } from "contexts/user-context";
import { Order } from "types/Order";

export const addOrder = async (
    newOrder: Omit<Order, "_id" | "placed">,
    dispatch: UserDispatch,
    token: string,
    showLoader: ShowLoader,
    hideLoader: HideLoader
) => {
    showLoader("Creating Order");
    try {
        const {
            data: { orders },
        } = await axios.post(
            "/api/user/orders",
            { order: newOrder },
            { headers: { authorization: token } }
        );
        dispatch({ type: "SET_ORDERS", payload: orders });
    } catch (error) {
        return error;
    } finally {
        hideLoader();
    }
};
