import { AddressType } from "./Address";

export interface Order {
    _id: string;
    placed: string;
    address: AddressType;
    products: string[];
    total: string;
    createdAt?: string;
}
