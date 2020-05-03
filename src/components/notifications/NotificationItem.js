import React from "react";
import styled, { css } from "styled-components";
import { Link, useLocation } from "react-router-dom";
import theme from "utils/theme";
import moment from "moment";
import PropTypes from "prop-types";
import avatars from "utils/avatars";

// COMPONENTS
import NickName from "components/atoms/NickName";
import Icon from "components/atoms/Icon";
import CreatedAtInfo from "components/atoms/CreatedAtInfo";

// ICONS
import UserIcon from "components/atoms/UserIcon";
import LikeIcon from "assets/icons/like.svg";
import CommentIcon from "assets/icons/comment.svg";

// REDUX STUFF
import { useDispatch } from "react-redux";
import { markReadNotification } from "redux/actions/userActions";

const StyledWrapper = styled.li`
  display: flex;
  padding: 10px 10px 30px 10px;
  border-top: 1px solid ${theme.colors.primary};
  position: relative;
  ${({ seen }) =>
    seen &&
    css`
      background: rgba(255, 255, 255, 0.05);
    `}
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
  const dispatch = useDispatch();
  const message =
    notification.type === "like" ? "liked your post" : "comment your post";
  const IconType = notification.type === "like" ? LikeIcon : CommentIcon;
  const handleNotificationClick = () =>
    dispatch(markReadNotification(notification.notification_id));
  const location = useLocation();
  return (
    <StyledWrapper seen={!notification.seen}>
      <StyledIcon big src={IconType} />
      <StyledContent
        as={Link}
        onClick={handleNotificationClick}
        to={{
          pathname: `/user/${notification.sender}/post/${notification.post_id}`,
          state: { prevPath: location.pathname },
        }}
      >
        <Link to={`/user/${notification.sender}`}>
          <UserIcon src={avatars[notification.avatar]} />
        </Link>
        <StyledInnerWrapper>
          <StyledNickName>{notification.sender}</StyledNickName>
          <span>{message}</span>
        </StyledInnerWrapper>
        <StyledCreatedAtInfo>
          {moment(notification.createdAt).fromNow()}
        </StyledCreatedAtInfo>
      </StyledContent>
    </StyledWrapper>
  );
};

NotificationItem.propTypes = {
  notification: PropTypes.object.isRequired,
};

export default NotificationItem;
