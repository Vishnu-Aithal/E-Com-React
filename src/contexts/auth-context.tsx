import React, { useContext, createContext, useReducer, Dispatch } from "react";
import { useEffect } from "react";
import { AuthActionTypes } from "reducer-functions/AuthReducer/AuthActionTypes";
import {
    authReducerFunction,
    initialState,
    AuthState,
} from "reducer-functions/AuthReducer/authReducer";

interface ContextValue {
    authState: AuthState;
    authDispatch: Dispatch<AuthActionTypes>;
}

const AuthContext = createContext<ContextValue>({
    authState: initialState,
    authDispatch: () => {},
});

export const AuthProvider: React.FC<React.PropsWithChildren> = ({
    children,
}): JSX.Element => {
    const [authState, authDispatch] = useReducer(
        authReducerFunction,
        initialState
    );
    useEffect(() => {
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("userId");
        if (token && userId) {
            authDispatch({ type: "LOGIN", payload: { token, userId } });
        }
    }, []);
    return (
        <AuthContext.Provider value={{ authState, authDispatch }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
