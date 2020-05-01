import styled, { css } from "styled-components";
import theme from "utils/theme";

const Input = styled.input`
  border: none;
  background: ${theme.colors.tertiary};
  border-bottom: 1px solid ${theme.colors.tertiary};
  outline: none;
  color: ${theme.colors.secondary};
  padding: 7px 10px;
  border-radius: 10px;
  border: 1px solid ${theme.colors.secondary};
  &::placeholder {
    color: grey;
  }
  &:focus {
    border: 1px solid ${theme.colors.primary};
  }
  ${({ secondary }) =>
    secondary &&
    css`
      font-size: ${theme.fontSize.m};
      margin-top: 5px;
      background: ${theme.colors.secondary};
      color: ${theme.colors.tertiary};
    `}
`;

export default Input;
