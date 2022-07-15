import styled from "styled-components";

export const StyledCart = {
    Content: styled.div`
        display: grid;
        width: 100%;
        align-items: start;
        overflow-y: hidden;
        padding: 2rem;

        @media only screen and (max-width: 768px) {
            & {
                overflow-y: auto;
                padding: 0.5rem;
            }
        }
    `,
    CardContainer: styled.div`
        grid-column: 1/6;
        grid-row: 1/7;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        max-height: 100%;
        width: 100%;
        overflow-y: auto;
        padding-bottom: 1rem;

        & .card {
            width: 80%;
        }

        & .card__dismiss {
            top: 0.5rem;
            right: 1rem;
        }

        @media only screen and (max-width: 768px) {
            & {
                grid-column: 1/7;
                grid-row: 3/7;
                overflow-y: unset;
                border-right: none;
                border-top: solid 2px var(--color-secondary-light);
                justify-content: center;
                margin: 0;
                padding-top: 0.5rem;
                margin-top: 1rem;
            }
            & .card__dismiss {
                top: -1%;
                right: 1%;
            }
        }
    `,
};
