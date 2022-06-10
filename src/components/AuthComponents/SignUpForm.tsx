import { signUpHandler } from "utility-functions/AuthHandlers/signUpHandler";
import { useNavigate } from "react-router-dom";
import { useAuth } from "contexts/auth-context";
import { useLoader } from "contexts/loader-context";
import { useState } from "react";
import { useToast } from "contexts/toast-context";
import classes from "./Auth.module.css";
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
    return (
        <form
            onSubmit={async (e) => {
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
                        description:
                            "Failed to Sign Up, Try Again after sometime",
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
            }}
            className="p-4 w-fit mx-auto br-2 mt-6">
            <h2 className="heading-md text-center mb-4">Sign Up</h2>

            <div className="input">
                <input
                    value={formDetails.firstName}
                    onChange={(e) =>
                        setFormDetails((formDetails) => ({
                            ...formDetails,
                            firstName: e.target.value,
                        }))
                    }
                    type="text"
                    className={`${classes["input__field"]} input__field`}
                    name="firstName"
                    placeholder="First name"
                    required
                />
                <label className="input__float-label" htmlFor="name">
                    First Name
                </label>
                <span className="input__required-text"></span>
            </div>
            <div className="input">
                <input
                    value={formDetails.lastName}
                    onChange={(e) =>
                        setFormDetails((formDetails) => ({
                            ...formDetails,
                            lastName: e.target.value,
                        }))
                    }
                    type="text"
                    className={`${classes["input__field"]} input__field`}
                    name="lastName"
                    placeholder="Last name"
                    required
                />
                <label className="input__float-label" htmlFor="name">
                    Last Name
                </label>
                <span className="input__required-text"></span>
            </div>
            <div className="input">
                <input
                    value={formDetails.email}
                    onChange={(e) =>
                        setFormDetails((formDetails) => ({
                            ...formDetails,
                            email: e.target.value,
                        }))
                    }
                    className={`${classes["input__field"]} input__field`}
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
                    className={`${classes["input__field"]} input__field`}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter New Password"
                    minLength={8}
                    required
                />
                <label className="input__float-label" htmlFor="password">
                    New Password
                </label>
                <span className="input__required-text"></span>
            </div>

            <div className="input">
                <input
                    className={`${classes["input__field"]} input__field`}
                    type="password"
                    name="password"
                    id="password2"
                    placeholder="Confirm Password"
                    minLength={8}
                    required
                />
                <label className="input__float-label" htmlFor="password">
                    Confirm Password
                </label>
                <span className="input__required-text"></span>
            </div>
            <div className="input mx-auto">
                <input type="checkbox" name="tandc" id="" required />
                <label className="text-sm" htmlFor="">
                    I accept all terms and conditions
                </label>
            </div>
            <input
                className="btn btn--primary br-1 mt-2 w-100p"
                type="submit"
                value="Sign Up"></input>
        </form>
    );
};
