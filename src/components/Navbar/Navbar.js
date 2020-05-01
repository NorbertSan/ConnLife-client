import React from "react";
import styled, { css } from "styled-components";
import theme from "utils/theme";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

// COMPONENTS
import HomeLink from "components/NavigationsLinks/HomeLink";

// REDUX STUFF
import { connect } from "react-redux";

const StyledWrapper = styled.div`
  width: 100%;
  position: "fixed";
  left: 0;
  top: 0;
  width: 100%;
  height: 10vh;
  border-bottom: 1px solid ${theme.colors.primary};
  margin-bottom: 50px;
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

const Navbar = ({ toogleUserProfile, auth }) => (
  <StyledWrapper>
    <StyledNavWrapper auth={auth}>
      {auth ? (
        <HomeLink toogleUserProfile={toogleUserProfile} />
      ) : (
        <>
          <StyledNavLink to="/login">Login</StyledNavLink>
          <StyledNavLink to="/signup">Sign up</StyledNavLink>
        </>
      )}
    </StyledNavWrapper>
  </StyledWrapper>
);

Navbar.propTypes = {
  auth: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.user.auth,
});

export default connect(mapStateToProps)(Navbar);
