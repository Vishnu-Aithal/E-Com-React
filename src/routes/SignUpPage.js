import { SignUpForm } from "components/SignUpForm";
import { TopNav } from "components/TopNav";
import "styles/auth.css";
export const SignUpPage = () => {
    return (
        <>
            <TopNav />
            <div className="auth-content">
                <SignUpForm />
            </div>
        </>
    );
};
