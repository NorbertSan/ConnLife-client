import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// COMPONENTS
import BackButton from "components/atoms/BackButton";

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  text-align: center;
`;
const StyledLink = styled(Link)`
  position: absolute;
  top: 20%;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateX(-50%);
`;

const Alert404 = ({ text }) => (
  <StyledWrapper>
    <StyledLink to="/">
      <BackButton />
      <span>Back to home page</span>
    </StyledLink>
    <h2>{text}</h2>
  </StyledWrapper>
);

export default Alert404;
