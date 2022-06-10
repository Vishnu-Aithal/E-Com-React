import { AddressType } from "./Address";
import { Order } from "./Order";

export interface User {
    firstName: string;
    lastName: string;
    email: string;
    orders: Order[];
    addresses: AddressType[];
}
