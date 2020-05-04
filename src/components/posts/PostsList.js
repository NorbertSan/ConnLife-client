import React, { useEffect, useState } from "react";
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

const PostsList = () => {
  const [startPosition, setStartPosition] = useState(0);
  const allPostFetched = useSelector((state) => state.UI.allPostFetched);
  const posts = useSelector((state) => state.data.posts);
  const loading = useSelector((state) => state.UI.loadingPosts);
  const loadingAddPost = useSelector((state) => state.UI.loadingAddPost);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPosts(startPosition));
  }, [dispatch, startPosition]);
  useEffect(() => {
    const listener = (e) => {
      if (allPostFetched) return;
      const limit = document.body.offsetHeight - window.innerHeight;
      const presentPosition = window.scrollY;
      if (presentPosition + 60 > limit) setStartPosition(startPosition + 5);
    };
    document.addEventListener("scroll", listener);
    return () => document.removeEventListener("scroll", listener);
  });

  return (
    <StyledWrapper>
      {loadingAddPost && <SinglePostSkeleton />}
      {posts.length > 0 &&
        posts.map((post, index) => (
          <PostItem post={post} key={`post:${post.post_id}`} />
        ))}
      {loading && <PostsSkeleton />}
    </StyledWrapper>
  );
};

export default PostsList;
