import React from "react";
import styled from "styled-components";
import theme from "utils/theme";

import SinglePostSkeleton from "components/loaders/SinglePostSkeleton";

const StyledWrapper = styled.div``;
const StyledRect = styled.div`
  width: 100%;
  height: 120px;
  background: ${theme.colors.primary};
`;
const StyledCircle = styled.div`
  width: 70px;
  height: 70px;
  position: relative;
  border-radius: 50%;
  background: grey;
  border: 3px solid ${theme.colors.tertiary};
  top: -20px;
`;
const StyledHeader = styled.div`
  width: 100%;
  padding: 15px 15px 25px 60px;
  div:nth-child(1) {
    width: 80px;
    height: 12px;
    background: grey;
    margin-bottom: 5px;
  }
  div:nth-child(2) {
    width: 100px;
    height: 7px;
    background: grey;
  }
`;
const StyledUserInfoWrapper = styled.div`
  padding: 0 20px;
`;
const StyledFirstRect = styled.div`
  height: 14px;
  width: 130px;
  background: ${theme.colors.primary};
  margin-bottom: 20px;
`;
const StyledSecondRect = styled.div`
  height: 10px;
  width: 200px;
  background: ${theme.colors.primary};
  margin-bottom: 6px;
`;
const StyledPostsWrapper = styled.div`
  margin-top: 30px;
  padding: 0 10px;
`;

const UserProfileSkeleton = () => (
  <StyledWrapper>
    <StyledHeader>
      <div />
      <div />
    </StyledHeader>
    <StyledRect />
    <StyledUserInfoWrapper>
      <StyledCircle />
      <StyledFirstRect />
      <StyledSecondRect />
      <StyledSecondRect />
      <StyledSecondRect />
    </StyledUserInfoWrapper>
    <StyledPostsWrapper>
      <SinglePostSkeleton />
      <SinglePostSkeleton />
      <SinglePostSkeleton />
    </StyledPostsWrapper>
  </StyledWrapper>
);

export default UserProfileSkeleton;
