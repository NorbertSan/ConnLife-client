import React from "react";
import styled from "styled-components";
import moment from "moment";
import Icon from "components/atoms/Icon";
import PlusIcon from "assets/icons/plus.svg";
import UserIcon from "components/atoms/UserIcon";
import noFaceIcon from "assets/images/no-face.png";
import NickName from "components/atoms/NickName";
import { Link } from "react-router-dom";
import theme from "utils/theme";
import LikeButton from "components/likes/LikeButton";
import CommentButton from "components/comments/CommentButton";
import CommentsList from "components/comments/CommentsList";
import CreatedAtInfo from "components/atoms/CreatedAtInfo";
import AddComment from "components/comments/AddComment";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
const StyledHeader = styled.header`
  display: flex;
  align-items: center;
`;
const StyledButtonsContainer = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${theme.colors.secondary};
  padding-bottom: 30px;
  position: relative;
`;
const StyledAddCommentIcon = styled(Icon)`
  margin-left: auto;
`;

class PostItemDetailsView extends React.Component {
  state = {
    isAddCommentFormOpen: false,
  };
  openAddCommentForm = () => this.setState({ isAddCommentFormOpen: true });
  render() {
    const { post } = this.props;
    const { isAddCommentFormOpen } = this.state;
    return (
      <StyledWrapper>
        <StyledHeader>
          <Link to={`/user/${post.nickName}`}>
            <UserIcon big src={noFaceIcon} />
          </Link>
          <div>
            <NickName>Norbert Sanpruch</NickName>
            <span>@norbasss</span>
          </div>
        </StyledHeader>
        <p>{post.body}</p>
        <CreatedAtInfo>{moment(post.createdAt).toString()}</CreatedAtInfo>
        <StyledButtonsContainer>
          <LikeButton big likesCount={post.likesCount} />
          <CommentButton big commentsCount={post.commentsCount} />
          <StyledAddCommentIcon
            onClick={this.openAddCommentForm}
            big
            src={PlusIcon}
          />
        </StyledButtonsContainer>
        {isAddCommentFormOpen && <AddComment />}
        <CommentsList />
      </StyledWrapper>
    );
  }
}

export default PostItemDetailsView;
