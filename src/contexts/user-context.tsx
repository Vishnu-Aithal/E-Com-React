import {
    createContext,
    PropsWithChildren,
    useContext,
    useEffect,
    useReducer,
} from "react";
import { UserActionTypes } from "reducer-functions/UserReducer/UserActionTypes";
import {
    initialState,
    userReducerFunction,
} from "reducer-functions/UserReducer/userReducer";
import { User } from "types/User";
import { getUserDetails } from "utility-functions/UserHandlers";
import { useAuth } from "./auth-context";
import { useLoader } from "./loader-context";

export type UserDispatch = React.Dispatch<UserActionTypes>;

export interface UserContextValue {
    userState: User;
    userDispatch: UserDispatch;
}
const UserContext = createContext<UserContextValue>({
    userState: initialState,
    userDispatch: () => {},
});

export const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [userState, userDispatch] = useReducer(
        userReducerFunction,
        initialState
    );
    const { authState } = useAuth();
    const { showLoader, hideLoader } = useLoader();

    useEffect(() => {
        (async () => {
            if (authState.isLoggedIn) {
                getUserDetails(authState.token, userDispatch);
            } else {
                userDispatch({
                    type: "SET_USER_DETAILS",
                    payload: initialState,
                });
            }
        })();
    }, [authState, showLoader, hideLoader]);

    return (
        <UserContext.Provider value={{ userState, userDispatch }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
