import axios from "axios";
import { HideLoader, ShowLoader } from "contexts/loader-context";
import { ShowToast } from "contexts/toast-context";

export const signUpHandler = async (
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    showLoader: ShowLoader,
    hideLoader: HideLoader,
    showToast: ShowToast
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
            showToast({
                title: "Signed Up",
                description: "Sign Up Succes",
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
