import { AddressType } from "./Address";
import { CartProduct } from "./Product";

export interface Order {
    _id: string;
    placed: string;
    address: AddressType;
    products: CartProduct[];
    total: string;
    createdAt?: string;
}
