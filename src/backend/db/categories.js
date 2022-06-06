import { v4 as uuid } from "uuid";
import casualSetImage from "assets/images/casual-collection.jpg";
import formalSetImage from "assets/images/formal-collection.jpg";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
    {
        _id: uuid(),
        title: "Formal Collection",
        highlight: "New Arrivals!",
        description: "Check Out the Best Formal collection Now",
        image: casualSetImage,
    },
    {
        _id: uuid(),
        title: "Casual Collection",
        highlight: "New Arrivals!",
        description: "Check Out the Best Casual collection Now",
        image: formalSetImage,
    },
];
