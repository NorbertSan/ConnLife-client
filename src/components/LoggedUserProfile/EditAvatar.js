import React, { useState } from "react";
import styled, { css } from "styled-components";
import theme from "utils/theme";

// AVATARS
import avatars from "utils/avatars";

import EditIcon from "assets/icons/edit.svg";
// COMPONENTS
import Button from "components/atoms/Button";
import XButton from "components/atoms/XButton";

// REDUX
import { connect } from "react-redux";
import { updateAvatar } from "redux/actions/userActions";

const StyledButton = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: ${theme.colors.tertiary};
  outline: none;
  position: absolute;
  border: none;
  top: -5px;
  left: 50px;
  border: 2px solid ${theme.colors.tertiary};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const StyledIcon = styled.img`
  width: 17px;
  height: 17px;
`;
const StyledBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
`;
const StyledDialog = styled.div`
  width: 300px;
  min-height: 200px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${theme.colors.tertiary};
  z-index: 999;
  display: flex;
  flex-wrap: wrap;
  padding: 15px;
  justify-content: center;
  border-radius: 10px;
  border: 2px solid ${theme.colors.primary};
`;
const StyledAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin: 10px;
  transition: transform 0.2s ease-in-out;
  outline: none;
  cursor: pointer;
  &:hover {
    transform: scale(1.07);
  }
  ${({ active }) =>
    active &&
    css`
      border: 3px solid ${theme.colors.primary};
    `}
`;

const EditAvatar = ({ avatar, updateAvatar, nickName }) => {
  const [dialogOpen, toogleDialog] = useState(false);
  const [newAvatar, changeAvatar] = useState(avatar);
  const handleUpdateAvatar = () =>
    updateAvatar({ avatar: newAvatar, nickName });
  return (
    <>
      <StyledButton onClick={() => toogleDialog(true)}>
        <StyledIcon src={EditIcon} />
      </StyledButton>
      {dialogOpen && (
        <>
          <StyledDialog>
            <XButton onClick={() => toogleDialog(false)}>X</XButton>
            {Object.keys(avatars).map((item, index) => (
              <StyledAvatar
                key={`avatar:${index}`}
                onClick={() => changeAvatar(item)}
                src={avatars[item]}
                active={newAvatar === item}
              />
            ))}
            <Button secondary onClick={handleUpdateAvatar}>
              Save
            </Button>
          </StyledDialog>
          <StyledBackground />
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  avatar: state.user.userInfo.avatar,
  nickName: state.user.userInfo.nickName,
});

export default connect(mapStateToProps, { updateAvatar })(EditAvatar);
