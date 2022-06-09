import { signInHandler } from "utility-functions/AuthHandlers/signInHandler";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useAuth } from "contexts/auth-context";
import { useLoader } from "contexts/loader-context";
import React, { useState } from "react";
import { useToast } from "contexts/toast-context";

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
    return (
        <>
            <form
                onSubmit={async (e: React.FormEvent) => {
                    e.preventDefault();
                    setFormDetails({ email: "", password: "" });
                    const response = await signInHandler(
                        formDetails.email,
                        formDetails.password,
                        showLoader,
                        hideLoader,
                        showToast,
                        rememberMe
                    );
                    if (response) {
                        authDispatch({
                            type: "LOGIN",
                            payload: response,
                        });
                        if (location.state) {
                            navigate(locationState.from.pathname);
                        } else {
                            navigate("/products");
                        }
                    }
                }}
                className="p-4 w-fit mx-auto br-2 mt-6">
                <h2 className="heading-md text-center mb-4">Sign In</h2>
                <div className="input">
                    <input
                        value={formDetails.email}
                        onChange={(e) =>
                            setFormDetails((formDetails) => ({
                                ...formDetails,
                                email: e.target.value,
                            }))
                        }
                        className="input__field"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter Email"
                        required
                    />
                    <label className="input__float-label" htmlFor="email">
                        Email
                    </label>
                    <span className="input__required-text"></span>
                </div>
                <div className="input">
                    <input
                        value={formDetails.password}
                        onChange={(e) =>
                            setFormDetails((formDetails) => ({
                                ...formDetails,
                                password: e.target.value,
                            }))
                        }
                        className="input__field"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter Password"
                        minLength={8}
                        required
                    />
                    <label className="input__float-label" htmlFor="password">
                        Password
                    </label>
                    <span className="input__required-text"></span>
                </div>
                <div className="input ms-1">
                    <input
                        onChange={(e) => setRememberMe(e.target.checked)}
                        checked={rememberMe}
                        type="checkbox"
                        className=""
                        name="tandc"
                        id=""
                    />
                    <label className="text-sm" htmlFor="">
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
                    onClick={async () => {
                        const response = await signInHandler(
                            "testuser@gmail.com",
                            "testuser@123",
                            showLoader,
                            hideLoader,
                            showToast,
                            true
                        );

                        if (response) {
                            authDispatch({
                                type: "LOGIN",
                                payload: response,
                            });
                            if (location.state) {
                                navigate(locationState.from.pathname);
                            } else {
                                navigate("/products");
                            }
                        }
                    }}>
                    Sign In Demo
                </button>
            </form>
        </>
    );
};
