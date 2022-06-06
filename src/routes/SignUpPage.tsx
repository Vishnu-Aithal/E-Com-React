import { SignUpForm } from "components/SignUpForm";
import "styles/auth.css";
export const SignUpPage: React.FC = () => {
    return (
        <div className="auth-content">
            <SignUpForm />
        </div>
    );
};
