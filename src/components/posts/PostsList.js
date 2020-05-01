import React, { useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// COMPONENTS
import PostItem from "components/posts/PostItem";
import PostsSkeleton from "components/loaders/PostsSkeleton";
import SinglePostSkeleton from "components/loaders/SinglePostSkeleton";

// REDUX STUFF
import { connect } from "react-redux";
import { getAllPosts } from "redux/actions/dataActions";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledAlert = styled.h3`
  text-align: center;
  margin-top: 40px;
`;

const PostsList = ({ getAllPosts, posts, loading, loadingAddPost }) => {
  useEffect(() => getAllPosts(), [getAllPosts]);
  return (
    <StyledWrapper>
      {loading ? (
        <PostsSkeleton />
      ) : (
        <>
          {loadingAddPost && <SinglePostSkeleton />}
          {posts.length > 0 ? (
            posts.map((post) => (
              <PostItem post={post} key={`post:${post.post_id}`} />
            ))
          ) : (
            <StyledAlert>There is no posts</StyledAlert>
          )}
        </>
      )}
    </StyledWrapper>
  );
};

const mapStateToProps = (state) => ({
  posts: state.data.posts,
  loading: state.UI.loadingPosts,
  loadingAddPost: state.UI.loadingAddPost,
});

PostsList.propTypes = {
  posts: PropTypes.array.isRequired,
  getAllPosts: PropTypes.func.isRequired,
  loadingPosts: PropTypes.bool,
  loadingAddPost: PropTypes.bool,
};

export default connect(mapStateToProps, { getAllPosts })(PostsList);
