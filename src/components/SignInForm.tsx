import { signInHandler } from "utility-functions/authHandler";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useAuth } from "contexts/auth-context";
import { useLoader } from "contexts/loader-context";
import React, { useState } from "react";

interface LocationState {
    from: { pathname: string };
}

export const SignInForm: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const locationState = location.state as LocationState;
    const { authDispatch } = useAuth();
    const { showLoader, hideLoader } = useLoader();
    const [formDetails, setFormDetails] = useState({
        email: "",
        password: "",
    });
    return (
        <>
            <form
                onSubmit={async (e: React.FormEvent) => {
                    e.preventDefault();
                    const response = await signInHandler(
                        formDetails.email,
                        formDetails.password,
                        showLoader,
                        hideLoader
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
                                name: e.target.value,
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
                    <input type="checkbox" className="" name="tandc" id="" />
                    <label className="text-sm" htmlFor="">
                        Remember Me
                    </label>
                </div>
                <input
                    className="btn btn--primary br-1 mt-2 w-100p"
                    type="submit"
                    value="Sign In"></input>
                <p className="helper-text mt-3">
                    Not a member? <Link to={"/sign-up"}>Sign Up</Link>
                </p>
                <button
                    className="btn btn--primary br-1 mt-2 "
                    onClick={async () => {
                        const response = await signInHandler(
                            "testuser@gmail.com",
                            "testuser@123",
                            showLoader,
                            hideLoader
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
