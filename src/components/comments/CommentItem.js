import React from "react";
import styled from "styled-components";
import theme from "utils/theme";
import moment from "moment";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import avatars from "utils/avatars";

// COMPONENTS
import UserIcon from "components/atoms/UserIcon";
import NickName from "components/atoms/NickName";
import CreatedAtInfo from "components/atoms/CreatedAtInfo";
import RemoveComment from "components/comments/RemoveComment";
import EditComment from "components/comments/EditComment";

// REDUX STUFF
import { connect } from "react-redux";

const StyledWrapper = styled.li`
  padding: 10px;
  border-top: 1px solid ${theme.colors.secondary};
  display: flex;
  position: relative;
`;
const StyledUserFaceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledVerticalLine = styled.div`
  width: 2px;
  flex: 1;
  background: ${theme.colors.primary};
`;
const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CommentItem = ({ comment, loggedUserComments }) => (
  <StyledWrapper>
    {loggedUserComments &&
      loggedUserComments.filter(
        (item) => item.comment_id === comment.comment_id
      ).length !== 0 && (
        <>
          <RemoveComment comment_id={comment.comment_id} />
          <EditComment comment_id={comment.comment_id} />
        </>
      )}
    <StyledUserFaceWrapper>
      <Link to={`/user/${comment.nickName}`}>
        <UserIcon src={avatars[comment.avatar]} />
      </Link>
      <StyledVerticalLine />
    </StyledUserFaceWrapper>
    <StyledContentWrapper>
      <NickName>{comment.nickName}</NickName>
      <CreatedAtInfo>{moment(comment.createdAt).fromNow()}</CreatedAtInfo>
      <p>{comment.body}</p>
    </StyledContentWrapper>
  </StyledWrapper>
);

CommentItem.propTypes = {
  comment: PropTypes.object,
  loggedUserComments: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  loggedUserComments: state.user.comments,
});

export default connect(mapStateToProps)(CommentItem);
