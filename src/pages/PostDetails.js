import React from "react";
import styled from "styled-components";
import BackButton from "components/atoms/BackButton";
import theme from "utils/theme";
import NickName from "components/atoms/NickName";
import PostItemDetailsView from "components/posts/PostItemDetailsView";
import { Link } from "react-router-dom";
const post = {
  nickName: "Johhny",
  body:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores quod quia ea quam officiis nam",
  createdAt: new Date(),
  likesCount: 2,
  commentsCount: 3,
};

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
  state = {
    userProfile: "",
  };
  componentDidMount() {
    this.setState({
      userProfile: `/user/${this.props.match.params.nickName}`,
    });
  }
  render() {
    const { userProfile } = this.state;
    return (
      <StyledWrapper>
        <StyledHeader>
          <Link to={userProfile}>
            <BackButton />
          </Link>
          <StyledNickName>Post</StyledNickName>
        </StyledHeader>
        <PostItemDetailsView post={post} />
      </StyledWrapper>
    );
  }
}

export default PostDetailsView;
