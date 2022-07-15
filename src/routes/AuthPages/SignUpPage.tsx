import { SignUpForm } from "components/AuthComponents/SignUpForm";
import { StyledAuthContent } from "./styled-AuthPage";
export const SignUpPage: React.FC = () => {
    return (
        <StyledAuthContent>
            <SignUpForm />
        </StyledAuthContent>
    );
};
