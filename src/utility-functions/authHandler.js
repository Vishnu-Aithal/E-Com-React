import axios from "axios";

export const signInHandler = async (email, password) => {
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
            localStorage.setItem("token", token);
            localStorage.setItem("userId", userId);
            return { token, userId };
        }
    } catch (error) {
        console.log(error);
    }
};
export const signUpHandler = async (email, password, firstName, lastName) => {
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
            localStorage.setItem("token", token);
            localStorage.setItem("userId", userId);
            return { token, userId };
        }
    } catch (error) {
        console.log(error);
    }
};
export const signOutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
};
