import { SignInForm } from "components/SignInForm";
import { TopNav } from "components/TopNav";
import "styles/auth.css";
export const SignInPage = () => {
    return (
        <>
            <TopNav />
            <div className="auth-content">
                <SignInForm />
            </div>
        </>
    );
};
