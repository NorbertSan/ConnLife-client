import React from "react";
import styled from "styled-components";
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
    const { auth } = this.props;
    return (
      <>
        {!auth ? (
          <Redirect to="/login" />
        ) : (
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
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.user.auth,
});

HomeView.propTypes = {
  auth: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(HomeView);
