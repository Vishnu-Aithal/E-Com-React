import styled, { keyframes } from "styled-components";

const loading = keyframes`
   0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.2);
    }
    100% {
        transform: scale(1);
    }
`;

export const StyledLoader = {
    Container: styled.div<{ state: "visible" | "hidden" }>`
        display: ${(props) => (props.state === "visible" ? "flex" : "none")};
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        align-items: center;
        justify-content: center;
        backdrop-filter: blur(2px) brightness(60%);
        border: solid 1px rgb(0, 0, 0, 0);
        z-index: 1;
    `,

    Text: styled.h1`
        color: white;
        animation-name: ${loading};
        animation-duration: 0.5s;
        animation-iteration-count: infinite;
        backface-visibility: none;
    `,
};
