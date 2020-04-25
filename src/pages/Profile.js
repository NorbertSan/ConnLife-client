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

// REDUX STUFF
import { connect } from "react-redux";

const StyledWrapper = styled.div`
  position: relative;
  ${({ isUpdateProfileOpen }) =>
    isUpdateProfileOpen &&
    css`
      opacity: 0.3;
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
  margin-top: 13px;
  height: 130px;
  background: ${theme.colors.primary};
`;
const StyledButton = styled(Button)`
  margin-left: auto;
  margin-right: 30px;
  position: relative;
  top: -30px;
`;
class ProfileView extends React.Component {
  state = {
    isUpdateProfileOpen: false,
  };
  openUpdateProfile = () => this.setState({ isUpdateProfileOpen: true });
  closeUpdateProfile = () => this.setState({ isUpdateProfileOpen: false });
  render() {
    const { isUpdateProfileOpen } = this.state;
    const { auth } = this.props;
    return (
      <>
        {!auth ? (
          <Redirect to="/login" />
        ) : (
          <>
            <UpdateProfile
              closeProfile={this.closeUpdateProfile}
              isOpen={isUpdateProfileOpen}
            />
            <StyledWrapper isUpdateProfileOpen={isUpdateProfileOpen}>
              <StyledBackLink to="/">
                <BackButton />
              </StyledBackLink>
              <StyledHeader>
                <StyledNickName>norbasss</StyledNickName>
                <span>3 Posts</span>
              </StyledHeader>
              <StyledRectangle />
              <UserInfo moreInfo />
              <StyledButton secondary onClick={this.openUpdateProfile}>
                Set up profile
              </StyledButton>
              <UserBar />
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

ProfileView.propTypes = {
  auth: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(ProfileView);
