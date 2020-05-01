import React from "react";
import styled from "styled-components";
import theme from "utils/theme";

const StyledSingleSkeleton = styled.li`
  padding: 35px 10px;
  display: flex;
  border-top: 1px solid ${theme.colors.primary};
`;
const StyledCircle = styled.div`
  width: 40px;
  height: 40px;
  background: grey;
  border-radius: 50%;
  margin-right: 10px;
`;
const StyledFakeContent = styled.div``;
const StyledFirstRec = styled.div`
  height: 12px;
  width: 50px;
  background: grey;
  margin-bottom: 6px;
`;
const StyledSecondRec = styled.div`
  height: 4px;
  width: 60px;
  background: grey;
  margin-bottom: 15px;
`;
const StyledThirdRec = styled.div`
  height: 7px;
  width: 200px;
  background: grey;
  margin-bottom: 6px;
`;

const SinglePostSkeleton = () => (
  <StyledSingleSkeleton>
    <StyledCircle />
    <StyledFakeContent>
      <StyledFirstRec />
      <StyledSecondRec />
      <StyledThirdRec />
      <StyledThirdRec />
    </StyledFakeContent>
  </StyledSingleSkeleton>
);

export default SinglePostSkeleton;
