import styled, { css } from "styled-components";
import theme from "utils/theme";

const XButton = styled.button`
  border: none;
  outline: none;
  background: none;
  font-weight: ${theme.fontWeight.bold};
  position: absolute;
  top: 15px;
  right: 15px;
  color: ${theme.colors.secondary};
  ${({ tertiaryColor }) =>
    tertiaryColor &&
    css`
      color: ${theme.colors.tertiary};
    `}
`;
export default XButton;
