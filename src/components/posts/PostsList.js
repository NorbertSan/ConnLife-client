import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// COMPONENTS
import PostItem from "components/posts/PostItem";

// REDUX STUFF
import { connect } from "react-redux";
import { getAllPosts } from "redux/actions/dataActions";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

class PostsList extends React.Component {
  componentDidMount() {
    this.props.getAllPosts();
  }
  render() {
    const { posts } = this.props;
    return (
      <StyledWrapper>
        {posts &&
          posts.map((post) => (
            <PostItem post={post} key={`post:${post.post_id}`} />
          ))}
      </StyledWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.data.posts,
});

PostsList.propTypes = {
  posts: PropTypes.array.isRequired,
  getAllPosts: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { getAllPosts })(PostsList);
