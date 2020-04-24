import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import NotificationIcon from "assets/icons/notification.svg";
import UserIcon from "assets/icons/user.svg";
import Icon from "components/atoms/Icon";
import theme from "utils/theme";

const StyledWrapper = styled.div`
  margin-top: 30px;
  padding: 10px;
`;
const StyledLink = styled(Link)`
  display: flex;
  align-items: flex-end;
  margin-bottom: 15px;
  font-size: ${theme.fontSize.s};
`;

const UserPanel = () => (
  <StyledWrapper>
    <StyledLink to="/user/sanpruch">
      <Icon src={UserIcon} />
      <span>Profile</span>
    </StyledLink>
    <StyledLink to="/notifications">
      <Icon src={NotificationIcon} />
      <span>Notifications</span>
    </StyledLink>
  </StyledWrapper>
);

export default UserPanel;
