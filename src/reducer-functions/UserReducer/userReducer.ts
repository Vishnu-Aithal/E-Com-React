import { User } from "types/User";
import { UserActionTypes } from "./UserActionTypes";

export const initialState: User = {
    firstName: "",
    lastName: "",
    email: "",
    orders: [],
    addresses: [],
};

export const userReducerFunction = (
    state: User,
    action: UserActionTypes
): User => {
    const { type } = action;
    switch (type) {
        case "SET_USER_DETAILS":
            return action.payload;
        case "SET_ADDRESSES":
            return { ...state, addresses: action.payload };
        case "SET_ORDERS":
            return { ...state, orders: action.payload };
        default:
            return state;
    }
};
