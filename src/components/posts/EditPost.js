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
import { editPost } from "redux/actions/dataActions";
import { CLEAR_SET_ERRORS_EDIT_POST } from "redux/types";

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

const EditPost = ({ loading, errors, posts, post_id, editPost }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [body, setBodyValue] = useState("");

  useEffect(() => {
    const editPost = posts.find((item) => item.post_id === post_id);
    if (editPost) setBodyValue(editPost.body);
  }, []);
  useEffect(() => {
    const editPost = posts.find((item) => item.post_id === post_id);
    setBodyValue(editPost.body);
    store.dispatch({ type: CLEAR_SET_ERRORS_EDIT_POST });
  }, [dialogOpen, post_id, posts]);

  const handleEditComment = () => editPost({ body }, post_id);

  return (
    <>
      <StyledButton onClick={() => setDialogOpen(true)}>
        <Icon small src={EditIcon} />
      </StyledButton>
      {dialogOpen && (
        <>
          <StyledDeleteBackground />
          <StyledDeleteAlert>
            <h4>Update post</h4>
            <Textarea
              value={body}
              onChange={(e) => setBodyValue(e.target.value)}
            />
            <StyledButtonsContainer>
              <Button onClick={() => setDialogOpen(false)} danger tertiary>
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
  loading: state.UI.loadingUpdatePost,
  posts: state.data.posts,
  errors: state.UI.errorsPostEdit,
});

EditPost.propTypes = {
  loading: PropTypes.bool.isRequired,
  posts: PropTypes.array.isRequired,
  post_id: PropTypes.number.isRequired,
  editPost: PropTypes.func.isRequired,
  errors: PropTypes.object,
};
export default connect(mapStateToProps, { editPost })(EditPost);
