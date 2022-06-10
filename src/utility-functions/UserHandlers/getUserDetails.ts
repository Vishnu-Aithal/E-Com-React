import axios from "axios";
import { UserDispatch } from "contexts/user-context";

export const getUserDetails = async (token: string, dispatch: UserDispatch) => {
    try {
        const {
            data: { userDetails },
        } = await axios.get("/api/user/details", {
            headers: { authorization: token },
        });
        dispatch({ type: "SET_USER_DETAILS", payload: userDetails });
    } catch (error) {
        return error;
    }
};
