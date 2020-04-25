import React from "react";
import styled from "styled-components";
import theme from "utils/theme";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

// COMPONENTS
import Logo from "components/atoms/Logo";
import HomeLink from "components/NavigationsLinks/HomeLink";

// REDUX STUFF
import { connect } from "react-redux";

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

const Navbar = ({ toogleUserProfile, auth }) => (
  <StyledWrapper>
    {auth ? (
      <>
        <HomeLink toogleUserProfile={toogleUserProfile} />
        <Logo>LOGO</Logo>
      </>
    ) : (
      <>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Sign up</NavLink>
      </>
    )}
  </StyledWrapper>
);

Navbar.propTypes = {
  auth: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.user.auth,
});

export default connect(mapStateToProps)(Navbar);
