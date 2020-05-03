import React from "react";
import styled from "styled-components";
import moment from "moment";
import theme from "utils/theme";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import avatars from "utils/avatars";

// COMPONENTS
import UserIcon from "components/atoms/UserIcon";
import NickName from "components/atoms/NickName";
import CreatedAtInfo from "components/atoms/CreatedAtInfo";
import LikeButton from "components/likes/LikeButton";
import CommentButton from "components/comments/CommentButton";
import RemovePost from "components/posts/RemovePost";
import EditPost from "components/posts/EditPost";

// REDUX STUFF
import { useSelector } from "react-redux";

const StyledWrapper = styled.article`
  padding: 30px 10px;
  display: flex;
  border-bottom: 1px solid ${theme.colors.primary};
  position: relative;
`;
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
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

const PostItem = ({ post, nickName }) => {
  const loggedUserPosts = useSelector((state) => state.user.posts);
  const location = useLocation();
  return (
    <StyledWrapper>
      {loggedUserPosts.filter((item) => item.post_id === post.post_id)
        .length !== 0 && (
        <>
          <RemovePost post_id={post.post_id} />
          <EditPost post_id={post.post_id} />
        </>
      )}
      <StyledLink to={`/user/${nickName ? nickName : post.nickName}`}>
        <UserIcon src={avatars[post.avatar]} />
      </StyledLink>
      <StyledContainer
        as={Link}
        to={{
          pathname: `/user/${post.nickName}/post/${post.post_id}`,
          state: { prevPath: location.pathname },
        }}
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
};
PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  nickName: PropTypes.string,
};

export default PostItem;
