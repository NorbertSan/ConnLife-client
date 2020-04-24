import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import UserIcon from "components/atoms/UserIcon";
import noFaceIcon from "assets/images/no-face.png";
import NickName from "components/atoms/NickName";
import Icon from "components/atoms/Icon";
import LikeIcon from "assets/icons/like.svg";
import CommentIcon from "assets/icons/comment.svg";
import theme from "utils/theme";
import moment from "moment";
import CreatedAtInfo from "components/atoms/CreatedAtInfo";

const StyledWrapper = styled.li`
  display: flex;
  padding: 10px 10px 20px 10px;
  border-top: 1px solid ${theme.colors.primary};
  position: relative;
`;
const StyledContent = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
`;
const StyledIcon = styled(Icon)`
  padding: 5px;
  border: 1px solid ${theme.colors.primary};
  border-radius: 50%;
`;
const StyledCreatedAtInfo = styled(CreatedAtInfo)`
  position: absolute;
  bottom: 10px;
  left: 90px;
`;
const StyledNickName = styled(NickName)`
  margin: 0;
  padding: 0;
  margin-right: 5px;
  color: ${theme.colors.primary};
`;
const StyledInnerWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

const NotificationItem = ({ notification }) => {
  const message =
    notification.type === "like" ? "liked your post" : "comment your post";
  return (
    <StyledWrapper>
      <StyledIcon big src={LikeIcon} />
      <StyledContent as={Link} to={`/user/${notification.nickName}/post/12`}>
        <UserIcon src={noFaceIcon} />
        <StyledInnerWrapper>
          <StyledNickName>{notification.nickName}</StyledNickName>
          <span>{message}</span>
        </StyledInnerWrapper>
        <StyledCreatedAtInfo>
          {moment(notification.createdAt).fromNow()}
        </StyledCreatedAtInfo>
      </StyledContent>
    </StyledWrapper>
  );
};

export default NotificationItem;
