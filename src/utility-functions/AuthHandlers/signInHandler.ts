import axios from "axios";
import { HideLoader, ShowLoader } from "contexts/loader-context";
import { ShowToast } from "contexts/toast-context";

export const signInHandler = async (
    email: string,
    password: string,
    showLoader: ShowLoader,
    hideLoader: HideLoader,
    showToast: ShowToast,
    rememberMe: boolean
) => {
    showLoader("Signing In");
    try {
        const {
            status,
            data: { encodedToken, foundUser },
        } = await axios.post("/api/auth/login", {
            email: email,
            password: password,
        });
        if (status === 200) {
            const token = encodedToken;
            const userId = foundUser._id;
            if (rememberMe) {
                localStorage.setItem("token", token);
                localStorage.setItem("userId", userId);
            }
            showToast({
                title: "Login Succes",
                description: "You have logged in successfully",
                type: "success",
            });
            return { token, userId };
        }
    } catch (error: any) {
        showToast({
            title: "Login Failed",
            description: error.message,
            type: "error",
        });
    } finally {
        hideLoader();
    }
};
