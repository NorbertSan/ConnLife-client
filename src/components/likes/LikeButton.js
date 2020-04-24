import React from "react";
import styled, { css } from "styled-components";
import LikeIcon from "assets/icons/like.svg";
import theme from "utils/theme";

const StyledButton = styled.button`
  background: none;
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  margin-right: 30px;
  position: relative;
  span {
    color: ${theme.colors.primary};
  }
  cursor: pointer;
  &:after {
    content: "Like";
    position: absolute;
    background: ${theme.colors.primary};
    color: ${theme.colors.tertiary};
    font-weight: ${theme.fontWeight.bold};
    width: 43px;
    height: 17px;
    border-radius: 10px;
    z-index: 9;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.15s ease-in-out;
  }
  &:hover:after {
    opacity: 1;
  }
`;
const StyledImage = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 5px;
  ${({ big }) =>
    big &&
    css`
      width: 25px;
      height: 25px;
    `}
`;

const LikeButton = ({ likesCount, big }) => (
  <StyledButton>
    <StyledImage big={big} src={LikeIcon} />
    <span>{likesCount}</span>
  </StyledButton>
);

export default LikeButton;
