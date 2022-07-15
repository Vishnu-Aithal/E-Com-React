import { useLoader } from "contexts/loader-context";
import { createPortal } from "react-dom";
import { StyledLoader } from "./styled-Loader";
const LoaderComponent: React.FC = () => {
    const { loader } = useLoader();
    return (
        <StyledLoader.Container state={loader.state}>
            <StyledLoader.Text>{loader.text}</StyledLoader.Text>
        </StyledLoader.Container>
    );
};

export const Loader: React.FC = () => {
    return createPortal(
        <LoaderComponent />,
        document.getElementById("loader-modal") as HTMLDivElement
    );
};
