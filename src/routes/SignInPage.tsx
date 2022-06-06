import { SignInForm } from "components/SignInForm";
import "styles/auth.css";
export const SignInPage: React.FC = () => {
    return (
        <div className="auth-content">
            <SignInForm />
        </div>
    );
};
