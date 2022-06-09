import axios from "axios";
import { HideLoader, ShowLoader } from "contexts/loader-context";
import React from "react";
import { AuthActionTypes } from "reducer-functions/AuthReducer/AuthActionTypes";

export const signUpHandler = async (
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    showLoader: ShowLoader,
    hideLoader: HideLoader,
    dispatch: React.Dispatch<AuthActionTypes>
) => {
    showLoader("Signing Up");
    try {
        const response = await axios.post("/api/auth/signup", {
            email,
            password,
            firstName,
            lastName,
        });
        if (response.status === 201) {
            const token = response.data.encodedToken;
            const userId = response.data.createdUser._id;
            // localStorage.setItem("token", token);
            // localStorage.setItem("userId", userId);
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
