import axios from "axios";
import { HideLoader, ShowLoader } from "contexts/loader-context";
import React from "react";
import { AuthActionTypes } from "reducer-functions/AuthReducer/AuthActionTypes";

export const signInHandler = async (
    email: string,
    password: string,
    showLoader: ShowLoader,
    hideLoader: HideLoader,
    dispatch: React.Dispatch<AuthActionTypes>,
    rememberMe: boolean
) => {
    showLoader("Signing In");
    try {
        const {
            status,
            data: { encodedToken, foundUser },
        } = await axios.post("/api/auth/login", {
            email,
            password,
        });
        if (status === 200) {
            const token = encodedToken;
            const userId = foundUser._id;
            if (rememberMe) {
                localStorage.setItem("token", token);
                localStorage.setItem("userId", userId);
            }
            dispatch({
                type: "LOGIN",
                payload: { token, userId },
            });
        }
    } catch (error) {
        return error;
    } finally {
        hideLoader();
    }
};
