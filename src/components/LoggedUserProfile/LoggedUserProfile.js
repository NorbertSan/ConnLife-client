import React, { useRef } from "react";
import styled, { css } from "styled-components";
import theme from "utils/theme";
import PropTypes from "prop-types";
// HOOK
import useDetectOutsideClick from "hooks/useDetectOutsideClick";
// COMPONENTS
import UserInfo from "./UserInfo";
import UserPanel from "./UserPanel";
import XButton from "components/atoms/XButton";
import LogoutButton from "./LogoutButton";

// REDUX
import { useSelector } from "react-redux";

const StyledWrapper = styled.section`
  min-width: 300px;
  display: flex;
  flex-direction: column;
  position: absolute;
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

const LoggedUserProfile = ({ isOpen, toggleUserProfile }) => {
  const modalRef = useRef(null);
  const loggedUserInfo = useSelector((state) => state.user.userInfo);
  useDetectOutsideClick(modalRef, toggleUserProfile);
  return (
    <StyledWrapper ref={modalRef} isOpen={isOpen}>
      <XButton type="none" onClick={() => toggleUserProfile(false)}>
        X
      </XButton>
      <StyledHeader>Account Info</StyledHeader>
      <UserInfo loggedUserInfo={loggedUserInfo} />
      <UserPanel />
      <LogoutButton />
    </StyledWrapper>
  );
};

LoggedUserProfile.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleUserProfile: PropTypes.func.isRequired,
};
export default LoggedUserProfile;
