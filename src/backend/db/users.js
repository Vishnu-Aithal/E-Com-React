import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
    {
        _id: uuid(),
        firstName: "Test",
        lastName: "User",
        email: "testuser@gmail.com",
        password: "testuser@123",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        addresses: [
            {
                _id: uuid(),
                name: "Home",
                city: "Bengaluru",
                phone: "9876543210",
                pincode: "560089",
                state: "Karnataka",
                street: "26th Street, 2nd Main",
            },
        ],
    },
];
