import React from "react";
import styled from "styled-components";
import theme from "utils/theme";
import PropTypes from "prop-types";

// COMPONENTS
import LogoutIcon from "assets/icons/logout.svg";
import Icon from "components/atoms/Icon";

// REDUX STUFF
import { connect } from "react-redux";
import { logoutUser } from "redux/actions/userActions";

const StyledWrapper = styled.div`
  border-top: 1px solid ${theme.colors.secondary};
  padding: 10px;
  display: flex;
  align-items: flex-end;
  font-size: ${theme.fontSize.s};
`;

const LogoutButton = ({ logoutUser }) => (
  <StyledWrapper onClick={logoutUser}>
    <Icon src={LogoutIcon} />
    <span>Logout</span>
  </StyledWrapper>
);

LogoutButton.propTypes = {
  logoutUser: PropTypes.func.isRequired,
};

export default connect(null, { logoutUser })(LogoutButton);
