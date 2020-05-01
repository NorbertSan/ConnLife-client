import React from "react";
import styled from "styled-components";
import theme from "utils/theme";
import PropTypes from "prop-types";

// COMPONENTS
import NotificationItem from "components/notifications/NotificationItem";

// REDUX
import { connect } from "react-redux";

const StyledWrapper = styled.ul`
  display: flex;
  margin: 100px 0 0 0;
  padding: 10px 0;
  list-style: none;
  display: flex;
  flex-direction: column;
`;
const StyledAlert = styled.div`
  text-align: center;
  color: ${theme.colors.primary};
  font-size: ${theme.fontSize.m};
`;

const NotificationsList = ({ type, notifications }) => {
  const notificationsToDisplay =
    type === "new"
      ? notifications.filter((item) => item.seen === 0)
      : notifications;
  return (
    <StyledWrapper>
      {notificationsToDisplay.length > 0 ? (
        notificationsToDisplay.map((notification) => (
          <NotificationItem
            key={notification.notification_id}
            notification={notification}
          />
        ))
      ) : (
        <StyledAlert>No notifications</StyledAlert>
      )}
    </StyledWrapper>
  );
};

const mapStateToProps = (state) => ({
  notifications: state.user.notifications,
});

NotificationsList.propTypes = {
  notifications: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired, // new || all
};

export default connect(mapStateToProps)(NotificationsList);
