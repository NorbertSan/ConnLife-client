import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Redirect } from "react-router-dom";

// COMPONENTS
import AddPost from "components/posts/AddPost";
import PostsList from "components/posts/PostsList";
import LoggedUserProfile from "components/LoggedUserProfile/LoggedUserProfile";
import Navbar from "components/Navbar/Navbar";

// REDUX
import { useSelector } from "react-redux";

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

const HomeView = () => {
  const auth = useSelector((state) => state.user.auth);
  const [isUserProfileOpen, toggleUserProfile] = useState(false);
  return (
    <>
      {!auth ? (
        <Redirect to="/login" />
      ) : (
        <>
          <Navbar toggleUserProfile={toggleUserProfile} />
          <LoggedUserProfile
            toggleUserProfile={toggleUserProfile}
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

export default HomeView;
