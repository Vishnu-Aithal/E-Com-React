import { SignUpForm } from "components/AuthComponents/SignUpForm";
import classes from "./AuthPage.module.css";
export const SignUpPage: React.FC = () => {
    return (
        <div className={classes["auth-content"]}>
            <SignUpForm />
        </div>
    );
};
