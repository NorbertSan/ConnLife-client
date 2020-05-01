import React from "react";
import styled from "styled-components";
import BackIcon from "assets/icons/leftArrow.svg";

const StyledButton = styled.button`
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  width: 40px;
  height: 40px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const BackButton = () => (
  <StyledButton>
    <img src={BackIcon} alt="back icon" />
  </StyledButton>
);

export default BackButton;
