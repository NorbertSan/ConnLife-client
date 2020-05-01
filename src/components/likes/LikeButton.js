import React from "react";
import styled, { css } from "styled-components";
import theme from "utils/theme";
import PropTypes from "prop-types";

import LikeIcon from "assets/icons/like.svg";
import NoLikeIcon from "assets/icons/noLike.svg";

// REDUX STUFF
import { connect } from "react-redux";
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

const LikeButton = ({ likesCount, big, post_id, like, unlike, likedPosts }) => {
  const handleClick = (e) => {
    e.preventDefault();
    if (likedPosts.filter((item) => item.post_id === post_id).length === 0)
      like(post_id);
    else unlike(post_id);
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
  like: PropTypes.func.isRequired,
  unlike: PropTypes.func.isRequired,
  likedPosts: PropTypes.array.isRequired,
  post_id: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  likedPosts: state.user.likes,
});

export default connect(mapStateToProps, { like, unlike })(LikeButton);
