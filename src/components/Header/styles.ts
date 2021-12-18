import styled from "styled-components";

export const Wrapper = styled.header`
    padding: 2rem;

    background-color: var(--blue);

    height: 21.2rem;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    max-width: 1120px;
    margin: 0 auto;

    @media (max-width: 420px) {
        flex-direction: column;
        height: 6rem;
    }
`;

export const Logo = styled.img`

    width: 172.8px;

    @media (max-width: 720px) {
        width: 135px;
    }
`;

export const Button = styled.button`

    background-color: var(--blue-light);
    width: 195px;
    height: 48px;
    border: none;
    border-radius: 5px;

    color: var(--shape);
    font-weight: 600;

    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.9);
    }

    @media (max-width: 720px) {
        width: 130px;
        height: 40px;
        min-width: 130px;

        font-size: 12px;
    }
`;