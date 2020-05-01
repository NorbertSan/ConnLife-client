import styled, { css } from "styled-components";
import theme from "utils/theme";

const UserIcon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 5px;
  object-fit: contain;
  background-color: ${theme.colors.secondary};
  ${({ big }) =>
    big &&
    css`
      width: 70px;
      height: 70px;
    `}
`;

export default UserIcon;
