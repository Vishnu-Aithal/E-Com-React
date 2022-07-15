import { SignInForm } from "components/AuthComponents/SignInForm";
import { StyledAuthContent } from "./styled-AuthPage";
export const SignInPage: React.FC = () => {
    return (
        <StyledAuthContent>
            <SignInForm />
        </StyledAuthContent>
    );
};
