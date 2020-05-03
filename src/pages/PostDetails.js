import React, { useEffect } from "react";
import styled from "styled-components";
import theme from "utils/theme";
import { Link, Redirect, useParams, useLocation } from "react-router-dom";

// COMPONENTS
import BackButton from "components/atoms/BackButton";
import NickName from "components/atoms/NickName";
import PostItemDetailsView from "components/posts/PostItemDetailsView";
import Alert404 from "components/atoms/Alert404";

// REDUX STUFF
import { useSelector, useDispatch } from "react-redux";
import { getSinglePost } from "redux/actions/dataActions";

const StyledWrapper = styled.div`
  position: relative;
`;
const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  padding-left: 30px;
  border-bottom: 1px solid ${theme.colors.secondary};
  max-width: 960px;
  margin: 0 auto;
`;
const StyledNickName = styled(NickName)`
  text-align: center;
  margin-left: 100px;
`;

const PostDetailsView = () => {
  const auth = useSelector((state) => state.user.auth);
  const postNotFound = useSelector((state) => state.UI.postNotFound);
  const dispatch = useDispatch();
  const { post_id } = useParams();
  const location = useLocation();
  useEffect(() => {
    dispatch(getSinglePost(post_id));
  }, [dispatch, post_id]);
  return (
    <>
      {postNotFound ? (
        <Alert404 text="Something went wrong, post not found" />
      ) : (
        <StyledWrapper>
          {!auth ? (
            <Redirect to="/login" />
          ) : (
            <>
              <StyledHeader>
                <Link to={location.state ? location.state.prevPath : "/"}>
                  <BackButton />
                </Link>
                <StyledNickName>Post</StyledNickName>
              </StyledHeader>
              <PostItemDetailsView />
            </>
          )}
        </StyledWrapper>
      )}
    </>
  );
};

export default PostDetailsView;
