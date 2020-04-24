import styled, { css } from "styled-components";

const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  ${({ big }) =>
    big &&
    css`
      width: 30px;
      height: 30px;
    `}
`;

export default Icon;
