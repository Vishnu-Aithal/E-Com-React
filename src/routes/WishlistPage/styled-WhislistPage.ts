import styled from "styled-components";

export const StyledWishlistPage = {
    Content: styled.div`
        width: 100%;
        overflow-y: hidden;
        padding: 1rem;

        @media only screen and (max-width: 768px) {
            & {
                overflow-y: auto;
            }
        }
    `,

    CardContainer: styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 1rem;
        max-height: 100%;
        width: 100%;
        overflow-y: auto;
        padding-bottom: 1rem;

        @media only screen and (max-width: 768px) {
            & {
                align-items: center;
                justify-content: center;
            }
        }
    `,
};
