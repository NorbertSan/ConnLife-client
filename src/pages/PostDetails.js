import React from "react";
import styled from "styled-components";
import theme from "utils/theme";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

// COMPONENTS
import BackButton from "components/atoms/BackButton";
import NickName from "components/atoms/NickName";
import PostItemDetailsView from "components/posts/PostItemDetailsView";
import Alert404 from "components/atoms/Alert404";

// REDUX STUFF
import { connect } from "react-redux";
import { getSinglePost } from "redux/actions/dataActions";

const StyledWrapper = styled.div`
  position: relative;
`;
const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  padding-left: 30px;
  border-bottom: 1px solid ${theme.colors.secondary};
`;
const StyledNickName = styled(NickName)`
  text-align: center;
  margin-left: 100px;
`;

class PostDetailsView extends React.Component {
  componentDidMount() {
    const post_id = this.props.match.params.post_id;
    this.props.getSinglePost(post_id);
  }
  render() {
    const { auth, postNotFound } = this.props;
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
                  <Link
                    to={
                      this.props.location.state
                        ? this.props.location.state.prevPath
                        : "/"
                    }
                  >
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
  }
}
const mapStateToProps = (state) => ({
  auth: state.user.auth,
  postNotFound: state.UI.postNotFound,
});

PostDetailsView.propTypes = {
  auth: PropTypes.bool.isRequired,
  getSinglePost: PropTypes.func.isRequired,
  postNotFound: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, { getSinglePost })(PostDetailsView);
