import React from "react";
import styled from "styled-components";
import LogoutIcon from "assets/icons/logout.svg";
import Icon from "components/atoms/Icon";
import theme from "utils/theme";

const StyledWrapper = styled.div`
  border-top: 1px solid ${theme.colors.secondary};
  padding: 10px;
  display: flex;
  align-items: flex-end;
  font-size: ${theme.fontSize.s};
`;

const LogoutButton = () => (
  <StyledWrapper>
    <Icon src={LogoutIcon} />
    <span>Logout</span>
  </StyledWrapper>
);

export default LogoutButton;
