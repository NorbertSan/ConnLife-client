import React from "react";
import styled from "styled-components";
import NotificationItem from "components/notifications/NotificationItem";

const notifications = [
  {
    nickName: "steincx3",
    type: "like",
    seen: false,
  },
  {
    nickName: "steincx3",
    type: "like",
    seen: true,
  },
  {
    nickName: "steincx3",
    type: "comment",
    seen: true,
  },
  {
    nickName: "steincx3",
    type: "comment",
    seen: false,
  },
];

const StyledWrapper = styled.ul`
  display: flex;
  margin: 100px 0 0 0;
  padding: 10px;
  list-style: none;
  display: flex;
  flex-direction: column;
`;

const NotificationsList = () => (
  <StyledWrapper>
    {notifications ? (
      notifications.map((not) => <NotificationItem notification={not} />)
    ) : (
      <span>No notifications</span>
    )}
  </StyledWrapper>
);

export default NotificationsList;
