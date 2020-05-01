import React from "react";
import styled, { css } from "styled-components";
import theme from "utils/theme";
import PropTypes from "prop-types";

// COMPONENTS
import UserInfo from "./UserInfo";
import UserPanel from "./UserPanel";
import XButton from "components/atoms/XButton";
import LogoutButton from "./LogoutButton";

// REDUX
import { connect } from "react-redux";

const StyledWrapper = styled.section`
  min-width: 300px;
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0%;
  transform: translateX(-100%);
  top: 10vh;
  min-height: 100%;
  background: ${theme.colors.quaternary};
  z-index: 999;
  transition: transform 0.3s ease-in-out;
  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: translateX(0);
    `}
`;
const StyledHeader = styled.div`
  margin-top: 15px;
  padding-bottom: 10px;
  font-weight: ${theme.fontWeight.bold};
  text-align: center;
  border-bottom: 1px solid ${theme.colors.secondary};
`;

const LoggedUserProfile = ({ isOpen, toogleUserProfile, loggedUserInfo }) => (
  <StyledWrapper isOpen={isOpen}>
    <XButton type="none" onClick={toogleUserProfile}>
      X
    </XButton>
    <StyledHeader>Account Info</StyledHeader>
    <UserInfo loggedUserInfo={loggedUserInfo} />
    <UserPanel />
    <LogoutButton />
  </StyledWrapper>
);

LoggedUserProfile.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toogleUserProfile: PropTypes.func.isRequired,
  loggedUserInfo: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  loggedUserInfo: state.user.userInfo,
});

export default connect(mapStateToProps)(LoggedUserProfile);
