import { signInHandler } from "utility-functions/AuthHandlers/signInHandler";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useAuth } from "contexts/auth-context";
import { useLoader } from "contexts/loader-context";
import React, { useState } from "react";
import { useToast } from "contexts/toast-context";

import { AuthForm } from "./styled-Auth";
import { MyInput } from "components/Layout/MyInput";

interface LocationState {
    from: { pathname: string };
}

export const SignInForm: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const locationState = location.state as LocationState;
    const { authDispatch } = useAuth();
    const { showLoader, hideLoader } = useLoader();
    const { showToast } = useToast();
    const [formDetails, setFormDetails] = useState({
        email: "",
        password: "",
    });
    const [rememberMe, setRememberMe] = useState(false);
    const handleError = (error: unknown) => {
        if (error) {
            showToast({
                title: "Login Failed",
                description: "Could not Log in, Try Agin after some time",
                type: "error",
            });
        } else {
            showToast({
                title: "Login Succes",
                description: "You have logged in successfully",
                type: "success",
            });

            if (locationState?.from?.pathname) {
                navigate(locationState.from.pathname);
            } else {
                navigate("/products");
            }
        }
    };
    const submitHandler = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormDetails({ email: "", password: "" });
        const error = await signInHandler(
            formDetails.email,
            formDetails.password,
            showLoader,
            hideLoader,
            authDispatch,
            rememberMe
        );
        handleError(error);
    };
    const signInDemo = async () => {
        const error = await signInHandler(
            "testuser@gmail.com",
            "testuser@123",
            showLoader,
            hideLoader,
            authDispatch,
            rememberMe
        );
        handleError(error);
    };
    return (
        <>
            <AuthForm
                onSubmit={submitHandler}
                className="p-4 w-fit mx-auto br-2 mt-6">
                <h2 className="heading-md text-center mb-4">Sign In</h2>

                <MyInput
                    label="Email"
                    value={formDetails.email}
                    onChange={(e) =>
                        setFormDetails((formDetails) => ({
                            ...formDetails,
                            email: e.target.value,
                        }))
                    }
                    type="email"
                    name="email"
                    id="email"
                    required
                />

                <MyInput
                    label="Password"
                    value={formDetails.password}
                    onChange={(e) =>
                        setFormDetails((formDetails) => ({
                            ...formDetails,
                            password: e.target.value,
                        }))
                    }
                    type="password"
                    name="password"
                    id="password"
                    minLength={8}
                    required
                />

                <div className="input ms-1">
                    <input
                        onChange={(e) => setRememberMe(e.target.checked)}
                        checked={rememberMe}
                        type="checkbox"
                        className=""
                        name="tandc"
                        id="remember-me"
                    />
                    <label className="text-sm ms-1" htmlFor="remember-me">
                        Remember Me
                    </label>
                </div>
                <button
                    className="btn btn--primary br-1 mt-2 w-100p"
                    type="submit">
                    Sign In
                </button>
                <p className="helper-text mt-3">
                    Not a member? <Link to={"/sign-up"}>Sign Up</Link>
                </p>
                <button
                    className="btn btn--primary br-1 mt-2 "
                    type="button"
                    onClick={signInDemo}>
                    Sign In Demo
                </button>
            </AuthForm>
        </>
    );
};
