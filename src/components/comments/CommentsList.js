import React from "react";
import styled from "styled-components";
import CommentItem from "components/comments/CommentItem";

const comments = [
  {
    body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, exercitationem quas? Impedit eligendi consectetur suscipit consequuntur asperiores accusamus laboriosam soluta cupiditate, nisi vel pariatur odit officia minus atque recusandae porro?`,
    nickName: "sanpruch",
    createdAt: new Date(),
  },
  {
    body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, exercitationem quas? Impedit eligendi consectetur suscipit consequuntur asperiores accusamus laboriosam soluta cupiditate, nisi vel pariatur odit officia minus atque recusandae porro?`,
    nickName: "sanpruch",
    createdAt: new Date(),
  },
  {
    body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, exercitationem quas? Impedit eligendi consectetur suscipit consequuntur asperiores accusamus laboriosam soluta cupiditate, nisi vel pariatur odit officia minus atque recusandae porro?`,
    nickName: "sanpruch",
    createdAt: new Date(),
  },
  {
    body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, exercitationem quas? Impedit eligendi consectetur suscipit consequuntur asperiores accusamus laboriosam soluta cupiditate, nisi vel pariatur odit officia minus atque recusandae porro?`,
    nickName: "sanpruch",
    createdAt: new Date(),
  },
];

const StyledWrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
`;
const CommentsList = () => (
  <StyledWrapper>
    {comments ? (
      comments.map((comment) => <CommentItem comment={comment} />)
    ) : (
      <span>Add first comment !</span>
    )}
  </StyledWrapper>
);

export default CommentsList;
