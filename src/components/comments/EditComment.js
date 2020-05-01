import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import theme from "utils/theme";
import store from "redux/store";

// COMPONENTS & ICONS
import EditIcon from "assets/icons/edit.svg";
import Button from "components/atoms/Button";
import Textarea from "components/atoms/Textarea";
import Icon from "components/atoms/Icon";
import Loader from "react-loader-spinner";
import ValidateError from "components/atoms/ValidateError";

// REDUX STUFF
import { connect } from "react-redux";
import { editComment } from "redux/actions/dataActions";
import { CLEAR_SET_ERRORS_EDIT_COMMENT } from "redux/types";

const StyledButton = styled.div`
  background: none;
  border: none;
  outline: none;
  position: absolute;
  top: 15px;
  right: 0px;
  cursor: pointer;
  font-size: ${theme.fontSize.s};
  text-align: center;
  z-index: 9;
`;
const StyledDeleteBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.3);
  z-index: 2;
`;
const StyledDeleteAlert = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  background: ${theme.colors.tertiary};
  color: ${theme.colors.secondary};
  padding: 25px;
  width: 300px;
  border-radius: 10px;
  border: 1px solid ${theme.colors.primary};
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
`;
const StyledButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 30px;
`;
const StyledValidateError = styled(ValidateError)`
  margin-top: 15px;
`;

const EditComment = ({
  loading,
  errors,
  editComment,
  comment_id,
  comments,
}) => {
  const [body, setBodyValue] = useState("");
  const [dialogOpen, setOpenDialog] = useState(false);
  const handleEditComment = (e) => {
    e.preventDefault();
    editComment({ body }, comment_id);
  };
  useEffect(() => {
    const editComment = comments.find((item) => (item.comment_id = comment_id));
    setBodyValue(editComment.body);
  }, [comments, comment_id]);
  useEffect(() => {
    const editComment = comments.find((item) => (item.comment_id = comment_id));
    setBodyValue(editComment.body);
    store.dispatch({ type: CLEAR_SET_ERRORS_EDIT_COMMENT });
  }, [dialogOpen, comment_id, comments]);

  return (
    <>
      <StyledButton onClick={() => setOpenDialog(true)}>
        <Icon small src={EditIcon} />
      </StyledButton>
      {dialogOpen && (
        <>
          <StyledDeleteBackground />
          <StyledDeleteAlert>
            <h4>Update comment</h4>
            <Textarea
              maxLength="1000"
              value={body}
              onChange={(e) => setBodyValue(e.target.value)}
            />
            <StyledButtonsContainer>
              <Button onClick={() => setOpenDialog(false)} danger tertiary>
                Back
              </Button>
              <Button secondary onClick={handleEditComment}>
                Edit
              </Button>
            </StyledButtonsContainer>
            {loading && (
              <Loader
                type="ThreeDots"
                color={theme.colors.primary}
                height={40}
                width={40}
              />
            )}
            {errors && errors.success && (
              <StyledValidateError>{errors.success}</StyledValidateError>
            )}
            {errors && errors.body && (
              <StyledValidateError danger>{errors.body}</StyledValidateError>
            )}
          </StyledDeleteAlert>
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  loading: state.UI.loadingUpdateComment,
  comments: state.data.singlePost.comments,
  errors: state.UI.errorsCommentEdit,
});

EditComment.propTypes = {
  loading: PropTypes.bool.isRequired,
  comments: PropTypes.array,
  comment_id: PropTypes.number.isRequired,
  editComment: PropTypes.func.isRequired,
  errors: PropTypes.object,
};
export default connect(mapStateToProps, { editComment })(EditComment);
