import React, { useState } from "react";
import styled from "styled-components";
import moment from "moment";
import { Link } from "react-router-dom";
import theme from "utils/theme";
import avatars from "utils/avatars";

// COMPONENTS
import Icon from "components/atoms/Icon";
import PlusIcon from "assets/icons/plus.svg";
import UserIcon from "components/atoms/UserIcon";
import NickName from "components/atoms/NickName";
import LikeButton from "components/likes/LikeButton";
import CommentButton from "components/comments/CommentButton";
import CommentsList from "components/comments/CommentsList";
import CreatedAtInfo from "components/atoms/CreatedAtInfo";
import AddComment from "components/comments/AddComment";
import PostDetailsSkeleton from "components/loaders/PostDetailsSkeleton";

// REDUX STUFF
import { useSelector } from "react-redux";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: auto;
  max-width: 760px;
`;
const StyledHeader = styled.header`
  display: flex;
  align-items: center;
`;
const StyledButtonsContainer = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${theme.colors.secondary};
  padding-bottom: 30px;
  position: relative;
`;
const StyledAddCommentIcon = styled(Icon)`
  margin-left: auto;
`;

const PostItemDetailsView = () => {
  const [isAddCommentFormOpen, toggleAddCommentForm] = useState(false);
  const post = useSelector((state) => state.data.singlePost.postDetails);
  const loading = useSelector((state) => state.UI.loadingSinglePost);
  return (
    <StyledWrapper>
      {loading || !post ? (
        <PostDetailsSkeleton />
      ) : (
        <>
          <StyledHeader>
            <Link to={`/user/${post.nickName}`}>
              <UserIcon big src={avatars[post.avatar]} />
            </Link>
            <div>
              <NickName>
                {post.firstName} {post.lastName}
              </NickName>
              <span>@{post.nickName}</span>
            </div>
          </StyledHeader>
          <p>{post.body}</p>
          <CreatedAtInfo>{moment(post.createdAt).toString()}</CreatedAtInfo>
          <StyledButtonsContainer>
            <LikeButton
              big
              likesCount={post.likesCount}
              post_id={post.post_id}
            />
            <CommentButton big commentsCount={post.commentsCount} />
            <StyledAddCommentIcon
              onClick={() => toggleAddCommentForm(true)}
              big
              src={PlusIcon}
            />
          </StyledButtonsContainer>
          {isAddCommentFormOpen && <AddComment />}
          <CommentsList />
        </>
      )}
    </StyledWrapper>
  );
};

export default PostItemDetailsView;
