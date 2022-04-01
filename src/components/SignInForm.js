import { Link } from "react-router-dom";
import { signInHandler } from "utility-functions/authHandler";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "contexts/auth-context";
export const SignInForm = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { authDispatch } = useAuth();
    return (
        <>
            <form
                onSubmit={async (e) => {
                    e.preventDefault();
                    const response = await signInHandler(
                        e.target.email.value,
                        e.target.password.value
                    );
                    if (response) {
                        authDispatch({
                            type: "LOGIN",
                            payload: response,
                        });
                        navigate(
                            location.pathname !== "/sign-in"
                                ? location.pathname
                                : "/"
                        );
                    }
                }}
                className="p-4 w-fit mx-auto br-2 mt-6">
                <h2 className="heading-md text-center mb-4">Sign In</h2>
                <div className="input">
                    <input
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
                        className="input__field"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter Password"
                        minLength="8"
                        required
                    />
                    <label className="input__float-label" htmlFor="password">
                        Password
                    </label>
                    <span className="input__required-text"></span>
                </div>
                <a className="d-inline-block text-end text-sm w-100p" href="">
                    Forgot password?
                </a>
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
                            "adarshbalika@gmail.com",
                            "adarshbalika"
                        );
                        if (response) {
                            authDispatch({ type: "LOGIN", payload: response });
                            navigate(
                                location.pathname !== "/sign-in"
                                    ? location.pathname
                                    : "/"
                            );
                        }
                    }}>
                    Sign In Demo
                </button>
            </form>
        </>
    );
};
