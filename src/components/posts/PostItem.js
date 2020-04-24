import React from "react";
import styled from "styled-components";
import moment from "moment";
import UserIcon from "components/atoms/UserIcon";
import noFaceIcon from "assets/images/no-face.png";
import NickName from "components/atoms/NickName";
import CreatedAtInfo from "components/atoms/CreatedAtInfo";
import LikeButton from "components/likes/LikeButton";
import CommentButton from "components/comments/CommentButton";
import theme from "utils/theme";
import { Link } from "react-router-dom";

const StyledWrapper = styled.article`
  padding: 10px 0;
  display: flex;
  border-top: 1px solid ${theme.colors.primary};
`;
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledNickName = styled(NickName)`
  margin-bottom: 0;
`;
const StyledButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const PostItem = ({ post }) => (
  <StyledWrapper>
    <Link to={`/user/${post.nickName}`}>
      <UserIcon src={noFaceIcon} />
    </Link>
    <StyledContainer as={Link} to={`/user/${post.nickName}/post/12`}>
      <StyledNickName>{post.nickName}</StyledNickName>
      <CreatedAtInfo>{moment(post.createdAt).fromNow()}</CreatedAtInfo>
      <p>{post.body}</p>
      <StyledButtonsContainer>
        <LikeButton likesCount={post.likesCount} />
        <CommentButton commentsCount={post.commentsCount} />
      </StyledButtonsContainer>
    </StyledContainer>
  </StyledWrapper>
);

export default PostItem;
