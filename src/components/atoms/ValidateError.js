import styled, { css } from "styled-components";
import theme from "utils/theme";

const ValidateError = styled.span`
  color: ${theme.colors.primary};
  font-weight: ${theme.fontWeight.bold};
  ${({ danger }) =>
    danger &&
    css`
      color: ${theme.colors.error};
    `}
`;

export default ValidateError;
