import { SignInForm } from "components/AuthComponents/SignInForm";
import classes from "./AuthPage.module.css";
export const SignInPage: React.FC = () => {
    return (
        <div className={classes["auth-content"]}>
            <SignInForm />
        </div>
    );
};
