import React from "react";
import styled from "styled-components";
import theme from "utils/theme";
import moment from "moment";
import UserIcon from "components/atoms/UserIcon";
import noFaceIcon from "assets/images/no-face.png";
import NickName from "components/atoms/NickName";
import CreatedAtInfo from "components/atoms/CreatedAtInfo";
import { Link } from "react-router-dom";

const StyledWrapper = styled.li`
  padding: 10px;
  border-top: 1px solid ${theme.colors.secondary};
  display: flex;
`;
const StyledUserFaceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledVerticalLine = styled.div`
  width: 2px;
  flex: 1;
  background: ${theme.colors.primary};
`;
const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CommentItem = ({ comment }) => (
  <StyledWrapper>
    <StyledUserFaceWrapper>
      <Link to={`/user/${comment.NickName}`}>
        <UserIcon src={noFaceIcon} />
      </Link>
      <StyledVerticalLine />
    </StyledUserFaceWrapper>
    <StyledContentWrapper>
      <NickName>{comment.nickName}</NickName>
      <CreatedAtInfo>{moment(comment.createdAt).fromNow()}</CreatedAtInfo>
      <p>{comment.body}</p>
    </StyledContentWrapper>
  </StyledWrapper>
);
export default CommentItem;
