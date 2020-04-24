import React from "react";
import styled from "styled-components";
import AddPost from "components/posts/AddPost";
import PostsList from "components/posts/PostsList";
import LoggedUserProfile from "components/LoggedUserProfile/LoggedUserProfile";
import Navbar from "components/Navbar/Navbar";

const StyledWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

class HomeView extends React.Component {
  state = {
    isUserProfileOpen: false,
  };
  toogleUserProfile = () =>
    this.setState((prevState) => ({
      isUserProfileOpen: !prevState.isUserProfileOpen,
    }));

  render() {
    const { isUserProfileOpen } = this.state;
    return (
      <>
        <Navbar toogleUserProfile={this.toogleUserProfile} />
        <StyledWrapper>
          <LoggedUserProfile
            toogleUserProfile={this.toogleUserProfile}
            isOpen={isUserProfileOpen}
          />
          <AddPost />
          <PostsList />
        </StyledWrapper>
      </>
    );
  }
}

export default HomeView;
