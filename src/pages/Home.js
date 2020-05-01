import React, { useState } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

// COMPONENTS
import AddPost from "components/posts/AddPost";
import PostsList from "components/posts/PostsList";
import LoggedUserProfile from "components/LoggedUserProfile/LoggedUserProfile";
import Navbar from "components/Navbar/Navbar";

// REDUX
import { connect } from "react-redux";

const StyledWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 760px;
  transition: opacity 0.3s ease-in-out;
  ${({ blurEffect }) =>
    blurEffect &&
    css`
      opacity: 0.1;
    `}
`;

const HomeView = ({ auth }) => {
  const [isUserProfileOpen, toggleUserProfile] = useState(false);
  const toogleUserProfileFunc = () =>
    toggleUserProfile((prevState) => !prevState);
  return (
    <>
      {!auth ? (
        <Redirect to="/login" />
      ) : (
        <>
          <Navbar toogleUserProfile={toogleUserProfileFunc} />
          <LoggedUserProfile
            toogleUserProfile={toogleUserProfileFunc}
            isOpen={isUserProfileOpen}
          />
          <StyledWrapper blurEffect={isUserProfileOpen}>
            <AddPost />
            <PostsList />
          </StyledWrapper>
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.user.auth,
});

HomeView.propTypes = {
  auth: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(HomeView);
