import { signUpHandler } from "utility-functions/AuthHandlers/signUpHandler";
import { useNavigate } from "react-router-dom";
import { useAuth } from "contexts/auth-context";
import { useLoader } from "contexts/loader-context";
import React, { useState } from "react";
import { useToast } from "contexts/toast-context";
import { AuthForm } from "./styled-Auth";
import { MyInput } from "components/Layout/MyInput";
export const SignUpForm = () => {
    const { authDispatch } = useAuth();
    const navigate = useNavigate();
    const { showLoader, hideLoader } = useLoader();
    const { showToast } = useToast();
    const [formDetails, setFormDetails] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
    });
    const submitHandler = async (e: React.FormEvent) => {
        e.preventDefault();
        const error = await signUpHandler(
            formDetails.email,
            formDetails.password,
            formDetails.firstName,
            formDetails.lastName,
            showLoader,
            hideLoader,
            authDispatch
        );
        if (error) {
            showToast({
                title: "Login Failed",
                description: "Failed to Sign Up, Try Again after sometime",
                type: "error",
            });
        } else {
            showToast({
                title: "Signed Up",
                description: "Sign Up Succes",
                type: "success",
            });
            navigate("/");
        }
    };
    return (
        <AuthForm
            onSubmit={submitHandler}
            className="p-4 w-fit mx-auto br-2 mt-6">
            <h2 className="heading-md text-center mb-4">Sign Up</h2>

            <MyInput
                label="First Name"
                value={formDetails.firstName}
                onChange={(e) =>
                    setFormDetails((formDetails) => ({
                        ...formDetails,
                        firstName: e.target.value,
                    }))
                }
                type="text"
                name="firstName"
                required
            />

            <MyInput
                label="Last Name"
                value={formDetails.lastName}
                onChange={(e) =>
                    setFormDetails((formDetails) => ({
                        ...formDetails,
                        lastName: e.target.value,
                    }))
                }
                type="text"
                name="lastName"
                required
            />

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
                label="New Password"
                value={formDetails.password}
                onChange={(e) =>
                    setFormDetails((formDetails) => ({
                        ...formDetails,
                        password: e.target.value,
                    }))
                }
                pattern=".{8,}"
                title="minimum 8 letters"
                type="password"
                name="password"
                id="password"
                minLength={8}
                required
            />

            <div className="input mx-auto">
                <input type="checkbox" name="tandc" id="TandC" required />
                <label className="text-sm" htmlFor="TandC">
                    I accept all terms and conditions
                </label>
            </div>
            <button className="btn btn--primary br-1 mt-2 w-100p" type="submit">
                Sign Up
            </button>
        </AuthForm>
    );
};
