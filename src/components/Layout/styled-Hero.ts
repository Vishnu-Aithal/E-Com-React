import styled from "styled-components";

export const StyledHero = {
    Container: styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 2rem;
        background-size: cover;
        background-position: center;
        height: 85vh;

        @media only screen and (max-width: 768px) {
            & {
                height: 70vh;
            }
        }
    `,

    Heading: styled.h1`
        @media only screen and (max-width: 768px) {
            & {
                max-width: 90%;
            }
        }
    `,
};
