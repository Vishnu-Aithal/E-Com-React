import styled from "styled-components";

export const StyledHighlight = {
    Item: styled.div`
        display: flex;
        width: 48vw;
        min-width: 500px;
        border: 2px solid var(--color-black-light);

        & img {
            max-width: 400px;
            height: 100%;
        }

        @media only screen and (max-width: 768px) {
            & {
                flex-direction: column;
                min-width: 350px;
            }
        }
    `,
    ImageWrapper: styled.div`
        height: 380px;
    `,

    ItemText: styled.div`
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    `,
};
