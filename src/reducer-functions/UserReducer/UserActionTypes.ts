import { AddressType } from "types/Address";
import { Order } from "types/Order";
import { User } from "types/User";

interface SetUserDetails {
    type: "SET_USER_DETAILS";
    payload: User;
}
interface SetAddresses {
    type: "SET_ADDRESSES";
    payload: AddressType[];
}
interface SetOrders {
    type: "SET_ORDERS";
    payload: Order[];
}

export type UserActionTypes = SetAddresses | SetUserDetails | SetOrders;
