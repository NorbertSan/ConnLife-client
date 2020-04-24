import styled, { css } from "styled-components";
import theme from "utils/theme";

const Input = styled.input`
  padding: 7px 12px 7px 0;
  border: none;
  background: ${theme.colors.tertiary};
  border-bottom: 1px solid ${theme.colors.tertiary};
  outline: none;
  color: ${theme.colors.secondary};
  padding: 10px 5px;
  border-radius: 10px;
  border: 2px solid ${theme.colors.secondary};
  &::placeholder {
    color: grey;
  }
  &:focus {
    border: 2px solid ${theme.colors.primary};
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
