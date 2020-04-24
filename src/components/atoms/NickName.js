import styled, { css } from "styled-components";
import theme from "utils/theme";

const NickName = styled.h3`
  font-size: ${theme.fontSize.m};
  font-weight: ${theme.fontWeight.bold};
  ${({ small }) =>
    small &&
    css`
      font-size: ${theme.fontSize.s};
      font-weight: ${theme.fontWeight.medium};
      margin: 0;
    `}
`;

export default NickName;
