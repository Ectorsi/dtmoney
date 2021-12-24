import styled, { css } from "styled-components";
import { CardProps } from '.';

type CardStyles = Pick<CardProps, 'cardType'>

export const wrapperModifiers = {
  primary: css`
    background-color: var(--shape);
  `,
  secondary: css`
    background-color: var(--green);
    color: var(--shape);
  `
}

export const Wrapper = styled.main<CardStyles>`
    ${({cardType}) => css`
    display: flex;
    flex-direction: column;
    align-items: start;
    border-radius: 5px;
    width: 352px;
    height: 136px;
    padding: 2rem;

    ${cardType && wrapperModifiers[cardType]}
    `}
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