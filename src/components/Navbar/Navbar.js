import React from "react";
import styled from "styled-components";
import HomeLink from "components/NavigationsLinks/HomeLink";
import Logo from "components/atoms/Logo";
import theme from "utils/theme";

const StyledWrapper = styled.nav`
  width: 100%;
  position: "fixed";
  left: 0;
  top: 0;
  width: 100%;
  min-height: 10vh;
  padding: 10px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${theme.colors.primary};
  margin-bottom: 50px;
`;

const Navbar = ({ toogleUserProfile }) => (
  <StyledWrapper>
    <HomeLink toogleUserProfile={toogleUserProfile} />
    <Logo>LOGO</Logo>
  </StyledWrapper>
);

export default Navbar;
