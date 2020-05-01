import React from "react";
import styled, { css } from "styled-components";
import { Link, Redirect } from "react-router-dom";
import theme from "utils/theme";
import PropTypes from "prop-types";

// COMPONENTS
import NickName from "components/atoms/NickName";
import BackButton from "components/atoms/BackButton";
import UserInfo from "components/LoggedUserProfile/UserInfo";
import Button from "components/atoms/Button";
import UpdateProfile from "components/profile/UpdateProfile";
import UserBar from "components/profile/UserBar";
import Alert404 from "components/atoms/Alert404";
import UserProfileSkeleton from "components/loaders/UserProfileSkeleton";

// REDUX STUFF
import { connect } from "react-redux";
import { getUserData } from "redux/actions/dataActions";
import store from "redux/store";
import { CLEAR_SET_ERRORS_UPDATE_PROFILE } from "redux/types";

const StyledWrapper = styled.div`
  margin: auto;
  max-width: 760px;
  position: relative;
  ${({ isUpdateProfileOpen }) =>
    isUpdateProfileOpen &&
    css`
      opacity: 0.1;
      pointer-events: none;
    `}
`;
const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 80px;
  span {
    font-size: ${theme.fontSize.s};
  }
`;
const StyledBackLink = styled(Link)`
  position: absolute;
  top: 15px;
  left: 15px;
`;
const StyledNickName = styled(NickName)`
  margin-bottom: 0;
`;
const StyledRectangle = styled.div`
  height: 130px;
  background: ${theme.colors.primary};
  position: relative;
  top: 30px;
  z-index: -1;
`;
const StyledButton = styled(Button)`
  margin: 25px 15px 15px auto;
`;

class ProfileView extends React.Component {
  state = {
    isUpdateProfileOpen: false,
  };
  componentDidMount() {
    const nickNameParam = this.props.match.params.nickName;
    this.props.getUserData(nickNameParam);
  }
  openUpdateProfile = () => this.setState({ isUpdateProfileOpen: true });
  closeUpdateProfile = () => {
    store.dispatch({ type: CLEAR_SET_ERRORS_UPDATE_PROFILE });
    this.setState({ isUpdateProfileOpen: false });
  };
  render() {
    const { isUpdateProfileOpen } = this.state;
    const {
      auth,
      userInfo,
      posts,
      likes,
      loggedUserNickName,
      loading,
      userNotFound,
    } = this.props;
    return (
      <>
        {!auth ? (
          <Redirect to="/login" />
        ) : (
          <>
            {userNotFound ? (
              <Alert404 text="Something went wrong, user not found" />
            ) : loading ? (
              <UserProfileSkeleton />
            ) : (
              <>
                {isUpdateProfileOpen && (
                  <UpdateProfile closeProfile={this.closeUpdateProfile} />
                )}
                <StyledWrapper isUpdateProfileOpen={isUpdateProfileOpen}>
                  <StyledBackLink to="/">
                    <BackButton />
                  </StyledBackLink>
                  <StyledHeader>
                    <StyledNickName>{userInfo.nickName}</StyledNickName>
                    <span>{posts.length} Posts</span>
                  </StyledHeader>
                  <StyledRectangle />
                  <UserInfo />
                  {loggedUserNickName === userInfo.nickName && (
                    <StyledButton secondary onClick={this.openUpdateProfile}>
                      Set up profile
                    </StyledButton>
                  )}
                  <UserBar posts={posts} likes={likes} />
                </StyledWrapper>
              </>
            )}
          </>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.user.auth,
  userInfo: state.data.userInfo,
  loggedUserNickName: state.user.userInfo.nickName,
  posts: state.data.posts,
  likes: state.data.likes,
  userNotFound: state.UI.userNotFound,
  loading: state.UI.loadingUser,
  errors: state.UI.errorsUpdateProfile,
});

ProfileView.propTypes = {
  auth: PropTypes.bool.isRequired,
  userInfo: PropTypes.object.isRequired,
  getUserData: PropTypes.func.isRequired,
  loggedUserNickName: PropTypes.string,
  posts: PropTypes.array.isRequired,
  likes: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  userNotFound: PropTypes.bool.isRequired,
  errors: PropTypes.object,
};

export default connect(mapStateToProps, { getUserData })(ProfileView);
