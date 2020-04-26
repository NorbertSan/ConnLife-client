import React from "react";
import styled from "styled-components";
import SinglePostSkeleton from "components/loaders/SinglePostSkeleton";

const StyledWrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const PostsSkeleton = () => (
  <StyledWrapper>
    <SinglePostSkeleton />
    <SinglePostSkeleton />
    <SinglePostSkeleton />
    <SinglePostSkeleton />
  </StyledWrapper>
);

export default PostsSkeleton;
