import styled, { keyframes } from "styled-components";

export const StyledAdress = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: auto;

    @media only screen and (max-width: 768px) {
        & {
            width: 90%;
        }
    }
`;

const enter = keyframes`
0%{
    opacity: 0;
    transform: translateY(-10rem);
}
100%{
    opacity: 1;
      transform: translateY(0);
}
`;

export const StyledAddressModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    backdrop-filter: blur(1px) brightness(70%);
    display: grid;
    place-content: center;

    & form {
        max-width: 90vw;
        animation-name: ${enter};
        animation-duration: 0.2s;
        animation-fill-mode: backwards;
    }
    & .input {
        max-width: 100%;
        margin: 2rem 0;
    }
    & .input__field {
        width: 20rem;
        max-width: 100%;
    }
`;
