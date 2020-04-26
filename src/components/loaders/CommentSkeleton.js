import React from "react";
import styled from "styled-components";
import theme from "utils/theme";

const StyledWrapper = styled.div`
  padding: 25px 10px;
  border-top: 1px solid ${theme.colors.secondary};
  display: flex;
`;
const StyledCircle = styled.div`
  width: 40px;
  height: 40px;
  background: grey;
  border-radius: 50%;
  background: ${theme.colors.primary};
  margin-right: 10px;
`;
const StyledFirstRect = styled.div`
  height: 14px;
  width: 40px;
  background: ${theme.colors.primary};
  margin-bottom: 10px;
`;
const StyledSecondRect = styled.div`
  height: 6px;
  width: 60px;
  background: ${theme.colors.primary};
  margin-bottom: 10px;
`;
const StyledThirdRect = styled.div`
  height: 8px;
  width: 200px;
  background: ${theme.colors.primary};
  margin-bottom: 5px;
`;
const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const CommentSkeleton = () => (
  <StyledWrapper>
    <StyledCircle />
    <StyledContent>
      <StyledFirstRect />
      <StyledSecondRect />
      <StyledThirdRect />
      <StyledThirdRect />
    </StyledContent>
  </StyledWrapper>
);

export default CommentSkeleton;
