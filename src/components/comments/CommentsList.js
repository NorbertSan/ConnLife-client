import React from "react";
import styled from "styled-components";

// COMPONENTS
import CommentItem from "components/comments/CommentItem";
import CommentSkeleton from "components/loaders/CommentSkeleton";

// REDUX STUFF
import { useSelector } from "react-redux";

const StyledWrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
`;
const StyledAlert = styled.h4`
  text-align: center;
`;

const CommentsList = () => {
  const comments = useSelector((state) => state.data.singlePost.comments);
  const loading = useSelector((state) => state.UI.loadingAddComment);
  return (
    <StyledWrapper>
      {loading && <CommentSkeleton />}
      {comments.length > 0 ? (
        comments.map((comment) => (
          <CommentItem
            key={`comment:${comment.comment_id}`}
            comment={comment}
          />
        ))
      ) : (
        <StyledAlert>No comments yet</StyledAlert>
      )}
    </StyledWrapper>
  );
};

export default CommentsList;
