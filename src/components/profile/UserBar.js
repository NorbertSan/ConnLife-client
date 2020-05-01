import React, { useState } from "react";
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
  cursor: pointer;
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

const UserBar = ({ posts, nickName, loggedUserNickName, likes }) => {
  const [isPostsOpen, tooglePosts] = useState(true);
  const [isLikesOpen, toogleLikes] = useState(false);
  const openPosts = () => {
    tooglePosts(true);
    toogleLikes(false);
  };
  const openLikes = () => {
    tooglePosts(false);
    toogleLikes(true);
  };
  return (
    <>
      <StyledWrapper>
        <StyledLi onClick={openPosts} active={isPostsOpen}>
          Posts
        </StyledLi>
        <StyledLi onClick={openLikes} active={isLikesOpen}>
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
          (likes.length > 0 ? (
            likes.map((likedPost) => (
              <PostItem
                key={`post:${likedPost.post_id}`}
                nickName={likedPost.nickName}
                post={likedPost}
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
};
const mapStateToProps = (state) => ({
  nickName: state.data.userInfo.nickName,
  loggedUserNickName: state.user.userInfo.nickName,
});

UserBar.propTypes = {
  posts: PropTypes.array.isRequired,
  likes: PropTypes.array,
  nickName: PropTypes.string,
  loggedUserNickName: PropTypes.string,
};

export default connect(mapStateToProps)(UserBar);
