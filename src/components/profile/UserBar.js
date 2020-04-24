import React from "react";
import styled, { css } from "styled-components";
import PostItem from "components/posts/PostItem";
import theme from "utils/theme";

const posts = [
  {
    nickName: "Johhny",
    body:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores quod quia ea quam officiis nam",
    createdAt: new Date(),
    likesCount: 2,
    commentsCount: 3,
  },
  {
    nickName: "Johhny",
    body:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores quod quia ea quam officiis nam",
    createdAt: new Date(),
    likesCount: 2,
    commentsCount: 3,
  },
  {
    nickName: "Johhny",
    body:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores quod quia ea quam officiis nam",
    createdAt: new Date(),
    likesCount: 2,
    commentsCount: 3,
  },
];

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
            (posts ? (
              posts.map((post) => <PostItem post={post} />)
            ) : (
              <span>You don't own any posts yet</span>
            ))}
          {isLikesOpen &&
            (posts ? (
              posts.map((post) => <PostItem post={post} />)
            ) : (
              <span>You don't have any liked posts yet</span>
            ))}
        </StyledPostsWrapper>
      </>
    );
  }
}

export default UserBar;
