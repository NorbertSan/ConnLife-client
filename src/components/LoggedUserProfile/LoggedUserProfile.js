import React from "react";
import styled, { css } from "styled-components";
import theme from "utils/theme";
import UserInfo from "./UserInfo";
import UserPanel from "./UserPanel";
import XButton from "components/atoms/XButton";
import LogoutButton from "./LogoutButton";

const StyledWrapper = styled.section`
  width: 70%;
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

const LoggedUserProfile = ({ isOpen, toogleUserProfile }) => (
  <StyledWrapper isOpen={isOpen}>
    <XButton type="none" onClick={toogleUserProfile}>
      X
    </XButton>
    <StyledHeader>Account Info</StyledHeader>
    <UserInfo />
    <UserPanel />
    <LogoutButton />
  </StyledWrapper>
);

export default LoggedUserProfile;
