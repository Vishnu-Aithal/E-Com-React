import styled from "styled-components";

export const StyledCartInfo = {
    Container: styled.div`
        width: 300px;
        grid-column: 6/7;
        grid-row: 1/7;
        margin-left: auto;

        @media only screen and (max-width: 768px) {
            & {
                width: 350px;
                margin: auto;
                grid-column: 1/7;
                grid-row: 1/3;
            }
        }
    `,

    Header: styled.h3`
        border-bottom: solid 2px var(--color-secondary-light);
    `,

    Total: styled.p`
        border-bottom: solid 2px var(--color-secondary-light);
    `,
};
