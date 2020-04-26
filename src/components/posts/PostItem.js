import React from "react";
import styled from "styled-components";
import moment from "moment";
import PropTypes from "prop-types";

// COMPONENTS
import UserIcon from "components/atoms/UserIcon";
import noFaceIcon from "assets/images/no-face.png";
import NickName from "components/atoms/NickName";
import CreatedAtInfo from "components/atoms/CreatedAtInfo";
import LikeButton from "components/likes/LikeButton";
import CommentButton from "components/comments/CommentButton";
import theme from "utils/theme";
import { Link } from "react-router-dom";
import RemovePost from "components/posts/RemovePost";

// REDUX STUFF
import { connect } from "react-redux";

const StyledWrapper = styled.article`
  padding: 10px 0;
  display: flex;
  border-top: 1px solid ${theme.colors.primary};
  position: relative;
`;
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledNickName = styled(NickName)`
  margin-top: 0;
  margin-bottom: 0;
`;
const StyledButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`;
const StyledLink = styled(Link)`
  margin-right: 7px;
`;

const PostItem = ({ post, nickName, loggedUserPosts }) => (
  <StyledWrapper>
    {loggedUserPosts.filter((item) => item.post_id === post.post_id).length !==
      0 && <RemovePost post_id={post.post_id} />}
    <StyledLink to={`/user/${nickName ? nickName : post.nickName}`}>
      <UserIcon src={noFaceIcon} />
    </StyledLink>
    <StyledContainer
      as={Link}
      to={`/user/${post.nickName}/post/${post.post_id}`}
    >
      <StyledNickName>{nickName ? nickName : post.nickName}</StyledNickName>
      <CreatedAtInfo>{moment(post.createdAt).fromNow()}</CreatedAtInfo>
      <p>{post.body}</p>
      <StyledButtonsContainer>
        <LikeButton likesCount={post.likesCount} post_id={post.post_id} />
        <CommentButton commentsCount={post.commentsCount} />
      </StyledButtonsContainer>
    </StyledContainer>
  </StyledWrapper>
);

const mapStateToProps = (state) => ({
  loggedUserPosts: state.user.posts,
});

PostItem.propTypes = {
  loggedUserPosts: PropTypes.array.isRequired,
  post: PropTypes.object.isRequired,
  nickName: PropTypes.string,
};

export default connect(mapStateToProps)(PostItem);
