import React from "react";
import styled from "styled-components";
import UserIcon from "components/atoms/UserIcon";
import { NavLink } from "react-router-dom";
import theme from "utils/theme";
import PropTypes from "prop-types";
import avatars from "utils/avatars";

// REDUX STUFF
import { useSelector } from "react-redux";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
`;
const StyledSpan = styled.span`
  font-size: ${theme.fontSize.m};
  font-weight: ${theme.fontWeight.bold};
`;

const HomeLink = ({ toggleUserProfile }) => {
  const userAvatar = useSelector((state) => state.user.userInfo.avatar);
  return (
    <StyledContainer>
      <div
        style={{ cursor: "pointer" }}
        onClick={() => toggleUserProfile(true)}
      >
        <UserIcon src={avatars[userAvatar]} />
      </div>
      <StyledSpan as={NavLink} to="/">
        Home
      </StyledSpan>
    </StyledContainer>
  );
};

HomeLink.propTypes = {
  toggleUserProfile: PropTypes.func.isRequired,
};
export default HomeLink;
