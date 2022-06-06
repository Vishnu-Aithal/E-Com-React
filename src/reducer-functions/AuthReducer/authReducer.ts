import { AuthActionTypes } from "./AuthActionTypes";

export interface AuthState {
    isLoggedIn: boolean;
    userId: string | null;
    token: string | null;
}

export const initialState: AuthState = {
    isLoggedIn: false,
    userId: null,
    token: null,
};

export const authReducerFunction = (
    state: AuthState,
    { type, payload }: AuthActionTypes
) => {
    switch (type) {
        case "LOGIN":
            return {
                ...state,
                isLoggedIn: true,
                userId: payload.userId,
                token: payload.token,
            };
        case "LOGOUT":
            return {
                ...initialState,
            };
        default:
            return state;
    }
};
