import styled, { css } from "styled-components";
import theme from "utils/theme";

const Button = styled.button`
  padding: 10px 15px;
  border-radius: 30px;
  text-transform: uppercase;
  background: ${theme.colors.primary};
  color: ${theme.colors.tertiary};
  font-weight: ${theme.fontWeight.bold};
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-self: center;
  cursor: pointer;
  ${({ secondary }) =>
    secondary &&
    css`
      background: ${theme.colors.tertiary};
      color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.primary};
    `}
  ${({ tertiary }) =>
    tertiary &&
    css`
      background: ${theme.colors.tertiary};
      color: ${theme.colors.secondary};
      border: 1px solid ${theme.colors.tertiary};
    `}
  ${({ danger }) =>
    danger &&
    css`
      background: transparent;
      border: 2px solid ${theme.colors.error};
      color: ${theme.colors.error};
    `}
`;

export default Button;
