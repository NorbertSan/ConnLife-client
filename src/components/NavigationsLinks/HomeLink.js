import React from "react";
import styled from "styled-components";
import noFaceIcon from "assets/images/no-face.png";
import UserIcon from "components/atoms/UserIcon";
import { NavLink } from "react-router-dom";
import theme from "utils/theme";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
`;
const StyledSpan = styled.span`
  font-size: ${theme.fontSize.m};
  font-weight: ${theme.fontWeight.bold};
`;

const HomeLink = ({ toogleUserProfile }) => (
  <StyledContainer>
    <div onClick={toogleUserProfile}>
      <UserIcon src={noFaceIcon} />
    </div>
    <StyledSpan as={NavLink} to="/">
      Home
    </StyledSpan>
  </StyledContainer>
);
export default HomeLink;
