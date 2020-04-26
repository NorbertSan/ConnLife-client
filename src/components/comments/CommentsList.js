import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// COMPONENTS
import CommentItem from "components/comments/CommentItem";
import CommentSkeleton from "components/loaders/CommentSkeleton";

// REDUX STUFF
import { connect } from "react-redux";

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

const CommentsList = ({ comments, loading }) => (
  <StyledWrapper>
    {loading && <CommentSkeleton />}
    {comments.length > 0 ? (
      comments.map((comment) => (
        <CommentItem key={`comment:${comment.comment_id}`} comment={comment} />
      ))
    ) : (
      <StyledAlert>No comments yet</StyledAlert>
    )}
  </StyledWrapper>
);
const mapStateToProps = (state) => ({
  comments: state.data.singlePost.comments,
  loading: state.UI.loadingAddComment,
});

CommentsList.propTypes = {
  comments: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(CommentsList);
