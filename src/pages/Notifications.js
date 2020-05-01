import React, { useState } from "react";
import styled from "styled-components";
import { Link, Redirect } from "react-router-dom";
import theme from "utils/theme";
import PropTypes from "prop-types";

// COMPONENTS
import BackButton from "components/atoms/BackButton";
import NickName from "components/atoms/NickName";
import NotificationsTypeSelect from "components/notifications/NotificationsTypeSelect";
import NotificationsList from "components/notifications/NotificationsList";

// REDUX STUFF
import { connect } from "react-redux";

const StyledWrapper = styled.section`
  margin: auto;
  max-width: 760px;
`;
const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  padding-left: 30px;
  border-bottom: 1px solid ${theme.colors.secondary};
  span {
    font-size: ${theme.fontSize.s};
  }
`;
const StyledNickName = styled(NickName)`
  margin-left: 60px;
`;

const Notifications = ({ auth }) => {
  const [type, changeType] = useState("new");
  return (
    <StyledWrapper>
      {!auth ? (
        <Redirect to="/login" />
      ) : (
        <>
          <StyledHeader>
            <Link to="/">
              <BackButton />
            </Link>
            <StyledNickName>Notifications</StyledNickName>
          </StyledHeader>
          <NotificationsTypeSelect
            changeOption={(e) => changeType(e.target.value)}
          />
          <NotificationsList type={type} />
        </>
      )}
    </StyledWrapper>
  );
};
const mapStateToProps = (state) => ({
  auth: state.user.auth,
});
Notifications.propTypes = {
  auth: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Notifications);
