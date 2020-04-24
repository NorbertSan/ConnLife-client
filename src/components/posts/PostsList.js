import React from "react";
import styled from "styled-components";
import PostItem from "components/posts/PostItem";

const posts = [
  {
    nickName: "Johhny",
    body:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores quod quia ea quam officiis nam",
    createdAt: new Date(),
    likesCount: 2,
    commentsCount: 3,
  },
  {
    nickName: "Johhny",
    body:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores quod quia ea quam officiis nam",
    createdAt: new Date(),
    likesCount: 2,
    commentsCount: 3,
  },
  {
    nickName: "Johhny",
    body:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores quod quia ea quam officiis nam",
    createdAt: new Date(),
    likesCount: 2,
    commentsCount: 3,
  },
];

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const PostsList = () => (
  <StyledWrapper>
    {posts &&
      posts.map((post) => (
        <PostItem post={post} key={`post:${post.post_id}`} />
      ))}
  </StyledWrapper>
);

export default PostsList;
