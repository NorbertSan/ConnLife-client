import React from "react";
import styled, { css } from "styled-components";
import theme from "utils/theme";
import moment from "moment";
import PropTypes from "prop-types";
import avatars from "utils/avatars";

// COMPONENTS
import UserIcon from "components/atoms/UserIcon";
import Icon from "components/atoms/Icon";
import NickName from "components/atoms/NickName";
import EditAvatar from "components/LoggedUserProfile/EditAvatar";

//ICONS / IMAGES
import CalendarIcon from "assets/icons/calendar.svg";
import WebsiteIcon from "assets/icons/website.svg";

// REDUX STUFF
import { useSelector } from "react-redux";

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
  border: 2px solid ${theme.colors.tertiary};
`;
const StyledExtraInfo = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: flex-end;
  span {
    font-size: ${theme.fontSize.s};
  }
`;

const UserInfo = ({ loggedUserInfo }) => {
  let userInfoToDisplay;
  const userInfo = useSelector((state) => state.data.userInfo);
  const loggedNickName = useSelector((state) => state.user.userInfo.nickName);
  if (loggedUserInfo) userInfoToDisplay = { ...loggedUserInfo };
  else userInfoToDisplay = { ...userInfo };
  return (
    <StyledWrapper>
      <div style={{ position: "relative" }}>
        <StyledUserIcon big src={avatars[userInfoToDisplay.avatar]} />
        {(loggedNickName === userInfo.nickName || loggedUserInfo) && (
          <EditAvatar />
        )}
      </div>
      <StyledName>{`${userInfoToDisplay.firstName} ${userInfoToDisplay.lastName}`}</StyledName>
      <NickName small>@{userInfoToDisplay.nickName}</NickName>
      {userInfoToDisplay.bio && <p>{userInfoToDisplay.bio}</p>}
      <StyledExtraInfo>
        <Icon src={CalendarIcon} />
        <span>Joined {moment(userInfoToDisplay.createdAt).fromNow()}</span>
      </StyledExtraInfo>
      {userInfoToDisplay.website && (
        <StyledExtraInfo>
          <Icon src={WebsiteIcon} />
          <span>
            <a
              href={`http://${userInfoToDisplay.website}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {userInfoToDisplay.website}
            </a>
          </span>
        </StyledExtraInfo>
      )}
    </StyledWrapper>
  );
};
UserInfo.propTypes = {
  loggedUserInfo: PropTypes.object,
};

export default UserInfo;
