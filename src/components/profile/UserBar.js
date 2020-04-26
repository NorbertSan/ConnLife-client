import React from "react";
import styled, { css } from "styled-components";
import theme from "utils/theme";
import PropTypes from "prop-types";

// COMPONENTS
import PostItem from "components/posts/PostItem";

// REDUX STUFF
import { connect } from "react-redux";

const StyledWrapper = styled.ul`
  margin: 0;
  padding: 10px;
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 10px;
`;
const StyledLi = styled.li`
  font-weight: ${theme.fontWeight.bold};
  position: relative;
  ${({ active }) =>
    active &&
    css`
      color: ${theme.colors.primary};
      &::after {
        content: "";
        position: absolute;
        width: 150%;
        height: 4px;
        background: ${theme.colors.primary};
        border-radius: 30px;
        left: 50%;
        bottom: -11px;
        transform: translateX(-50%);
        z-index: 99;
      }
    `}
`;
const StyledPostsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
`;
const StyledAlert = styled.h3`
  text-align: center;
  margin-top: 40px;
`;

class UserBar extends React.Component {
  state = {
    isPostsOpen: true,
    isLikesOpen: false,
  };
  openPosts = () =>
    this.setState((prevState) => ({
      isPostsOpen: true,
      isLikesOpen: false,
    }));
  openLikes = () =>
    this.setState((prevState) => ({
      isPostsOpen: false,
      isLikesOpen: true,
    }));
  render() {
    const { isPostsOpen, isLikesOpen } = this.state;
    const { posts, nickName, loggedUserNickName } = this.props;
    return (
      <>
        <StyledWrapper>
          <StyledLi onClick={this.openPosts} active={isPostsOpen}>
            Posts
          </StyledLi>
          <StyledLi onClick={this.openLikes} active={isLikesOpen}>
            Likes
          </StyledLi>
        </StyledWrapper>
        <StyledPostsWrapper>
          {isPostsOpen &&
            (posts.length > 0 ? (
              posts.map((post) => (
                <PostItem
                  key={`post:${post.post_id}`}
                  nickName={nickName}
                  post={post}
                />
              ))
            ) : (
              <StyledAlert>
                {" "}
                {loggedUserNickName === nickName
                  ? "You don't own any posts yet"
                  : `User ${nickName} has no posts `}{" "}
              </StyledAlert>
            ))}
          {isLikesOpen &&
            (posts.length > 0 ? (
              posts.map((post) => (
                <PostItem
                  key={`post:${post.post_id}`}
                  nickName={nickName}
                  post={post}
                />
              ))
            ) : (
              <StyledAlert>
                {loggedUserNickName === nickName
                  ? "You don't have any liked posts"
                  : `User ${nickName} has no liked posts `}
              </StyledAlert>
            ))}
        </StyledPostsWrapper>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  nickName: state.data.userInfo.nickName,
  loggedUserNickName: state.user.userInfo.nickName,
});

UserBar.propTypes = {
  posts: PropTypes.array.isRequired,
  nickName: PropTypes.string,
  loggedUserNickName: PropTypes.string,
};

export default connect(mapStateToProps)(UserBar);
