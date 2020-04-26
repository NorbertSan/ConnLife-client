import React from "react";
import styled from "styled-components";
import theme from "utils/theme";

// COMPONENTS
import CommentSkeleton from "components/loaders/CommentSkeleton";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledBigCircle = styled.div`
  width: 70px;
  height: 70px;
  background: ${theme.colors.primary};
  border-radius: 50%;
  margin-right: 10px;
`;
const StyledSmallCircle = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  background: ${theme.colors.primary};
  border-radius: 50%;
  margin: 15px 10px 0 0;
`;
const StyledFirstRect = styled.div`
  height: 14px;
  width: 80px;
  background: ${theme.colors.primary};
  margin-bottom: 8px;
`;
const StyledSecondRect = styled.div`
  height: 5px;
  width: 120px;
  background: ${theme.colors.primary};
  margin-bottom: 15px;
`;
const StyledThirdRect = styled.div`
  height: 8px;
  width: 180px;
  background: ${theme.colors.primary};
  margin-bottom: 5px;
`;
const StyledInnerWrapper = styled.div`
  display: flex;
  padding: 10px 0 40px 0;
`;

const PostDetailsSkeleton = () => (
  <StyledWrapper>
    <StyledInnerWrapper>
      <StyledBigCircle />
      <div>
        <StyledFirstRect />
        <StyledSecondRect />
        <StyledThirdRect />
        <StyledThirdRect />
        <StyledSmallCircle />
        <StyledSmallCircle />
      </div>
    </StyledInnerWrapper>
    <CommentSkeleton />
    <CommentSkeleton />
    <CommentSkeleton />
  </StyledWrapper>
);

export default PostDetailsSkeleton;
