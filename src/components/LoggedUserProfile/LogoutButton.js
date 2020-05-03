import React from "react";
import styled from "styled-components";
import theme from "utils/theme";

// COMPONENTS
import LogoutIcon from "assets/icons/logout.svg";
import Icon from "components/atoms/Icon";
// REDUX STUFF
import { useDispatch } from "react-redux";
import { logoutUser } from "redux/actions/userActions";

const StyledWrapper = styled.div`
  border-top: 1px solid ${theme.colors.secondary};
  padding: 10px;
  display: flex;
  align-items: flex-end;
  font-size: ${theme.fontSize.s};
`;

const LogoutButton = () => {
  const dispatch = useDispatch();
  const handleLogoutUser = () => dispatch(logoutUser());
  return (
    <StyledWrapper onClick={handleLogoutUser}>
      <Icon src={LogoutIcon} />
      <span>Logout</span>
    </StyledWrapper>
  );
};

export default LogoutButton;
