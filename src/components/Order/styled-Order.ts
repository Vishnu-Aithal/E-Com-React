import styled from "styled-components";

export const StyledOrder = {
    Container: styled.div`
        border: solid 1px gray;
        border-radius: 0.25rem;
        padding: 1rem;
        width: 90%;
    `,

    ProductList: styled.ul`
        list-style: none;
        margin: 0.5rem;
        width: fit-content;

        & li {
            border: solid 1px lightgray;
            padding: 0.25rem 0.5rem;
        }
    `,
};
