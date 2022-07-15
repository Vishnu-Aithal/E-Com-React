import styled from "styled-components";

export const StyledFilter = {
    Container: styled.aside`
        min-width: 320px;
        padding: 1.5rem;
        overflow: auto;

        @media only screen and (max-width: 768px) {
            & {
                font-size: 75%;
                width: 100%;
                align-items: start;
                border-right: none;
                padding: 0.5rem 1.5rem;
                border-bottom: 2px solid var(--color-secondary-light);
                overflow: unset;
            }
        }
    `,

    Header: styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
    `,

    Toggle: styled.button`
        display: none;

        @media only screen and (max-width: 768px) {
            & {
                display: block;
            }
        }
    `,

    Clear: styled.p`
        text-decoration: underline;
        text-underline-offset: 2px;
        cursor: pointer;
    `,

    PriceSlider: styled.input`
        width: 100%;
    `,

    PriceSteps: styled.datalist`
        display: flex;
        justify-content: space-between;
        font-size: 0.6rem;
        width: 100%;
    `,

    Grouper: styled.div`
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    `,

    Body: styled.div<{ showFilter: boolean }>`
        @media only screen and (max-width: 768px) {
            display: ${(props) => (props.showFilter ? "block" : "none")};
        }
    `,
};
