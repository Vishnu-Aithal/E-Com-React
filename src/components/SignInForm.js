import { Link } from "react-router-dom";
export const SignInForm = () => {
    return (
        <form action="" className="p-4 w-fit mx-auto br-2 mt-6">
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
                <input type="checkbox" name="tandc" id="" required />
                <label className="text-sm" htmlFor="">
                    Remember Me
                </label>
            </div>
            <button className="btn btn--primary br-1 mt-2 w-100p" type="submit">
                Sign In
            </button>

            <p className="helper-text mt-3">
                Not a member? <Link to={"/sign-up"}>Sign Up</Link>
            </p>
        </form>
    );
};
