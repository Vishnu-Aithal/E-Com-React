export interface Product {
    _id: string;
    title: string;
    brand: string;
    price: string;
    category: string;
    type: string;
    image: string;
    rating: number;
    outOfStock: boolean;
}

export interface CartProduct extends Product {
    qty: number;
}
