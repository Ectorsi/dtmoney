import styled from "styled-components";

export const Wrapper = styled.main`
    display: flex;
    flex-direction: column;
    align-items: start;

    width: 352px;
    height: 136px;

    padding: 2rem;

    background: var(--shape);

`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: fill-available;
`;

export const Value = styled.span`
    font-size: 36px;
    font-weight: 500;
`;