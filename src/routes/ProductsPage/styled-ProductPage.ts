import styled from "styled-components";

export const StyledProductPage = {
    Content: styled.div`
        display: flex;
        width: 100%;
        padding-top: 1rem;
        overflow-y: auto;

        @media only screen and (max-width: 768px) {
            & {
                overflow-y: auto;
                padding-top: 0;
                flex-direction: column;
            }
        }
    `,
    Display: styled.div`
        width: 100%;
        overflow-y: auto;

        @media only screen and (max-width: 768px) {
            & {
                padding: 1rem;
            }
        }
    `,
    CardContainer: styled.div`
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
        padding: 1rem;
        gap: 1rem;
        max-height: 100%;
        width: 100%;

        @media only screen and (max-width: 768px) {
            & {
                grid-template-columns: auto;
                justify-content: center;
                overflow-y: unset;
            }
        }
    `,
};
