import React from "react";
import styled, { css } from "styled-components";
import theme from "utils/theme";
import PropTypes from "prop-types";

import LikeIcon from "assets/icons/like.svg";
import NoLikeIcon from "assets/icons/noLike.svg";

// REDUX STUFF
import { useSelector, useDispatch } from "react-redux";
import { like, unlike } from "redux/actions/dataActions";

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

const LikeButton = ({ likesCount, big, post_id }) => {
  const likedPosts = useSelector((state) => state.user.likes);
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    const isLiked =
      likedPosts.filter((item) => item.post_id === post_id).length !== 0;
    if (isLiked) dispatch(unlike(post_id));
    else dispatch(like(post_id));
  };
  return (
    <StyledButton onClick={handleClick}>
      <StyledImage
        big={big}
        src={
          likedPosts.filter((item) => item.post_id === post_id).length === 0
            ? NoLikeIcon
            : LikeIcon
        }
      />
      <span>{likesCount}</span>
    </StyledButton>
  );
};
LikeButton.propTypes = {
  post_id: PropTypes.number.isRequired,
  likesCount: PropTypes.number.isRequired,
  big: PropTypes.bool,
};
export default LikeButton;
