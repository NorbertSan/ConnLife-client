import React, { useEffect } from "react";
import styled from "styled-components";

// COMPONENTS
import PostItem from "components/posts/PostItem";
import PostsSkeleton from "components/loaders/PostsSkeleton";
import SinglePostSkeleton from "components/loaders/SinglePostSkeleton";

// REDUX STUFF
import { useSelector, useDispatch } from "react-redux";
import { getAllPosts } from "redux/actions/dataActions";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledAlert = styled.h3`
  text-align: center;
  margin-top: 40px;
`;

const PostsList = () => {
  const posts = useSelector((state) => state.data.posts);
  const loading = useSelector((state) => state.UI.loadingPosts);
  const loadingAddPost = useSelector((state) => state.UI.loadingAddPost);
  const dispatch = useDispatch();
  useEffect(() => dispatch(getAllPosts()), [dispatch]);
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

export default PostsList;
