import React from "react";
import styled from "styled-components";
import theme from "utils/theme";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

// COMPONENTS
import BackButton from "components/atoms/BackButton";
import NickName from "components/atoms/NickName";
import PostItemDetailsView from "components/posts/PostItemDetailsView";

// REDUX STUFF
import { connect } from "react-redux";

const post = {
  nickName: "Johhny",
  body:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores quod quia ea quam officiis nam",
  createdAt: new Date(),
  likesCount: 2,
  commentsCount: 3,
};

const StyledWrapper = styled.div`
  position: relative;
`;
const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  padding-left: 30px;
  border-bottom: 1px solid ${theme.colors.secondary};
`;
const StyledNickName = styled(NickName)`
  text-align: center;
  margin-left: 100px;
`;

class PostDetailsView extends React.Component {
  state = {
    userProfile: "",
  };
  componentDidMount() {
    this.setState({
      userProfile: `/user/${this.props.match.params.nickName}`,
    });
  }
  render() {
    const { auth } = this.props;
    const { userProfile } = this.state;
    return (
      <StyledWrapper>
        {!auth ? (
          <Redirect to="/login" />
        ) : (
          <>
            <StyledHeader>
              <Link to={userProfile}>
                <BackButton />
              </Link>
              <StyledNickName>Post</StyledNickName>
            </StyledHeader>
            <PostItemDetailsView post={post} />
          </>
        )}
      </StyledWrapper>
    );
  }
}
const mapStateToProps = (state) => ({
  auth: state.user.auth,
});

PostDetailsView.propTypes = {
  auth: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(PostDetailsView);
