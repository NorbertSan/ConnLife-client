import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { Link, Redirect, useParams } from "react-router-dom";
import theme from "utils/theme";

// COMPONENTS
import NickName from "components/atoms/NickName";
import BackButton from "components/atoms/BackButton";
import UserInfo from "components/LoggedUserProfile/UserInfo";
import Button from "components/atoms/Button";
import UpdateProfile from "components/profile/UpdateProfile";
import UserBar from "components/profile/UserBar";
import Alert404 from "components/atoms/Alert404";
import UserProfileSkeleton from "components/loaders/UserProfileSkeleton";

// REDUX STUFF
import { useSelector, useDispatch } from "react-redux";
import { getUserData } from "redux/actions/dataActions";
import store from "redux/store";
import { CLEAR_SET_ERRORS_UPDATE_PROFILE } from "redux/types";

const StyledWrapper = styled.div`
  margin: auto;
  max-width: 960px;
  position: relative;
  ${({ isUpdateProfileOpen }) =>
    isUpdateProfileOpen &&
    css`
      opacity: 0.1;
      pointer-events: none;
    `}
`;
const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 80px;
  span {
    font-size: ${theme.fontSize.s};
  }
`;
const StyledBackLink = styled(Link)`
  position: absolute;
  top: 15px;
  left: 15px;
`;
const StyledNickName = styled(NickName)`
  margin-bottom: 0;
`;
const StyledRectangle = styled.div`
  height: 130px;
  background: ${theme.colors.primary};
  position: relative;
  top: 30px;
  z-index: -1;
`;
const StyledButton = styled(Button)`
  margin: 25px 15px 15px auto;
`;

const ProfileView = () => {
  const auth = useSelector((state) => state.user.auth);
  const userInfo = useSelector((state) => state.data.userInfo);
  const loggedUserNickName = useSelector(
    (state) => state.user.userInfo.nickName
  );
  const posts = useSelector((state) => state.data.posts);
  const likes = useSelector((state) => state.data.likes);
  const userNotFound = useSelector((state) => state.UI.userNotFound);
  const loading = useSelector((state) => state.UI.loadingUser);
  const { nickName } = useParams();
  const [isUpdateProfileOpen, toogleUpdateProfile] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const nickNameParam = nickName;
    dispatch(getUserData(nickNameParam));
  }, [dispatch, nickName]);

  const openUpdateProfile = () => toogleUpdateProfile(true);
  const closeUpdateProfile = () => {
    store.dispatch({ type: CLEAR_SET_ERRORS_UPDATE_PROFILE });
    toogleUpdateProfile(false);
  };
  return (
    <>
      {!auth ? (
        <Redirect to="/login" />
      ) : (
        <>
          {userNotFound ? (
            <Alert404 text="Something went wrong, user not found" />
          ) : loading ? (
            <UserProfileSkeleton />
          ) : (
            <>
              {isUpdateProfileOpen && (
                <UpdateProfile toogleUpdateProfile={closeUpdateProfile} />
              )}
              <StyledWrapper isUpdateProfileOpen={isUpdateProfileOpen}>
                <StyledBackLink to="/">
                  <BackButton />
                </StyledBackLink>
                <StyledHeader>
                  <StyledNickName>{userInfo.nickName}</StyledNickName>
                  <span>{posts.length} Posts</span>
                </StyledHeader>
                <StyledRectangle />
                <UserInfo />
                {loggedUserNickName === userInfo.nickName && (
                  <StyledButton secondary onClick={openUpdateProfile}>
                    Set up profile
                  </StyledButton>
                )}
                <UserBar posts={posts} likes={likes} />
              </StyledWrapper>
            </>
          )}
        </>
      )}
    </>
  );
};

export default ProfileView;
