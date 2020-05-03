import React from "react";
import styled, { css } from "styled-components";
import theme from "utils/theme";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

// COMPONENTS
import HomeLink from "components/Navbar/HomeLink";

// REDUX STUFF
import { useSelector } from "react-redux";

const StyledWrapper = styled.div`
  width: 100%;
  position: "fixed";
  left: 0;
  top: 0;
  height: 10vh;
  border-bottom: 1px solid ${theme.colors.primary};
  margin-bottom: 50px;
  max-width: 960px;
  margin: 0 auto;
`;

const StyledNavWrapper = styled.nav`
  height: 10vh;
  display: flex;
  align-items: center;
  width: 50%;
  margin-left: auto;
  justify-content: space-around;
  ${({ auth }) =>
    auth &&
    css`
      margin: 0 auto 0 40px;
      justify-content: flex-start;
    `}
`;
const StyledNavLink = styled(NavLink)`
  font-weight: ${theme.fontWeight.bold};
  font-size: ${theme.fontSize.m};
  color: ${theme.colors.primary}!important;
`;

const Navbar = ({ toggleUserProfile }) => {
  const auth = useSelector((state) => state.user.auth);
  return (
    <StyledWrapper>
      <StyledNavWrapper auth={auth}>
        {auth ? (
          <HomeLink toggleUserProfile={toggleUserProfile} />
        ) : (
          <>
            <StyledNavLink to="/login">Login</StyledNavLink>
            <StyledNavLink to="/signup">Sign up</StyledNavLink>
          </>
        )}
      </StyledNavWrapper>
    </StyledWrapper>
  );
};

Navbar.propTypes = {
  toggleUserProfile: PropTypes.func,
};

export default Navbar;
