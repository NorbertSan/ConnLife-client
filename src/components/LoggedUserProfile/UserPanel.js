import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import theme from "utils/theme";

// COMPONENTS
import NotificationIcon from "assets/icons/notification.svg";
import UserIcon from "assets/icons/user.svg";
import Icon from "components/atoms/Icon";
import Badge from "components/atoms/Badge";

// REDUX STUFF
import { connect } from "react-redux";

const StyledWrapper = styled.div`
  margin-top: 30px;
  padding: 10px;
`;
const StyledLink = styled(Link)`
  display: flex;
  align-items: flex-end;
  margin-bottom: 15px;
  font-size: ${theme.fontSize.s};
  position: relative;
`;

const UserPanel = ({ nickName, notifications }) => (
  <StyledWrapper>
    <StyledLink to={`/user/${nickName}`}>
      <Icon src={UserIcon} />
      <span>Profile</span>
    </StyledLink>
    <StyledLink to="/notifications">
      <Icon src={NotificationIcon} />
      {notifications.filter((item) => item.seen === 0).length > 0 && (
        <Badge> {notifications.filter((item) => item.seen === 0).length}</Badge>
      )}
      <span>Notifications</span>
    </StyledLink>
  </StyledWrapper>
);

const mapStateToProps = (state) => ({
  nickName: state.user.userInfo.nickName,
  notifications: state.user.notifications,
});

UserPanel.propTypes = {
  nickName: PropTypes.string,
  notifications: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(UserPanel);
