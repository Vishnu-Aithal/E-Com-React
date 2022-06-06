import { AuthActionTypes } from "./AuthActionTypes";

interface LoggedInState {
    isLoggedIn: true;
    userId: string;
    token: string;
}

interface LoggedOutState {
    isLoggedIn: false;
    userId: null;
    token: null;
}
export type AuthState = LoggedInState | LoggedOutState;

export const initialState: AuthState = {
    isLoggedIn: false,
    userId: null,
    token: null,
};

export const authReducerFunction = (
    state: AuthState,
    action: AuthActionTypes
): AuthState => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                isLoggedIn: true,
                userId: action.payload.userId,
                token: action.payload.token,
            };
        case "LOGOUT":
            return {
                ...initialState,
            };
        default:
            return state;
    }
};
