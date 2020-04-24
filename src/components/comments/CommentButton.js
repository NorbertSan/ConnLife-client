import React from "react";
import styled, { css } from "styled-components";
import CommentIcon from "assets/icons/comment.svg";
import theme from "utils/theme";

const StyledButton = styled.button`
  background: none;
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  margin-right: 30px;
  position: relative;
  cursor: pointer;
  span {
    color: ${theme.colors.primary};
  }
  &:after {
    content: "Comments";
    position: absolute;
    background: ${theme.colors.primary};
    color: ${theme.colors.tertiary};
    font-weight: ${theme.fontWeight.bold};
    height: 17px;
    padding: 0 5px;
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

const CommentButton = ({ commentsCount, big }) => (
  <StyledButton>
    <StyledImage big={big} src={CommentIcon} />
    <span>{commentsCount}</span>
  </StyledButton>
);

export default CommentButton;
