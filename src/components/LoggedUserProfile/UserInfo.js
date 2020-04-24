import React from "react";
import styled, { css } from "styled-components";
import theme from "utils/theme";
import noFaceIcon from "assets/images/no-face.png";
import UserIcon from "components/atoms/UserIcon";
import CalendarIcon from "assets/icons/calendar.svg";
import WebsiteIcon from "assets/icons/website.svg";
import Icon from "components/atoms/Icon";
import NickName from "components/atoms/NickName";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  ${({ moreInfo }) =>
    moreInfo &&
    css`
      transform: translateY(-60px);
    `}
`;
const StyledName = styled.h3`
  margin-bottom: 0;
`;
const StyledUserIcon = styled(UserIcon)`
  ${({ moreInfo }) =>
    moreInfo &&
    css`
      width: 80px;
      height: 80px;
      border: 2px solid ${theme.colors.tertiary};
    `}
`;
const StyledExtraInfo = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: flex-end;
  span {
    font-size: ${theme.fontSize.s};
  }
`;

const UserInfo = ({ moreInfo }) => (
  <StyledWrapper moreInfo={moreInfo}>
    <StyledUserIcon moreInfo={moreInfo} src={noFaceIcon} />
    <StyledName>Norbert Sańpruch</StyledName>
    <NickName small>@norbasss</NickName>
    {moreInfo && (
      <>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
          quibusdam libero explicabo dolorem error illo laudantium similique
          neque reiciendis labore enim blanditiis sint fuga at in distinctio
        </p>
        <StyledExtraInfo>
          <Icon src={CalendarIcon} />
          <span>Joined 26.03.2020</span>
        </StyledExtraInfo>
        <StyledExtraInfo>
          <Icon src={WebsiteIcon} />
          <span>http://google.com</span>
        </StyledExtraInfo>
      </>
    )}
  </StyledWrapper>
);

export default UserInfo;
