import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import EditItemModal from "components/modals/EditItemModal";

// REDUX STUFF
import { useSelector, useDispatch } from "react-redux";
import { editComment } from "redux/actions/dataActions";
import { CLEAR_SET_ERRORS_EDIT_COMMENT } from "redux/types";

const EditComment = ({ comment_id }) => {
  const [body, setBodyValue] = useState("");
  const [isModalOpen, toggleModalOpen] = useState(false);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.UI.loadingUpdateComment);
  const comments = useSelector((state) => state.data.singlePost.comments);
  const errors = useSelector((state) => state.UI.errorsCommentEdit);
  const modalRef = useRef(null);
  useEffect(() => {
    const editComment = comments.find((item) => (item.comment_id = comment_id));
    setBodyValue(editComment.body);
  }, [comments, comment_id]);
  useEffect(() => {
    const editComment = comments.find((item) => (item.comment_id = comment_id));
    setBodyValue(editComment.body);
    dispatch({ type: CLEAR_SET_ERRORS_EDIT_COMMENT });
  }, [isModalOpen, comment_id, comments, dispatch]);
  const handleEditComment = () => dispatch(editComment({ body }, comment_id));

  return (
    <EditItemModal
      errors={errors}
      modalRef={modalRef}
      loading={loading}
      body={body}
      setInputValue={setBodyValue}
      toggleModal={toggleModalOpen}
      isModalOpen={isModalOpen}
      editFunc={handleEditComment}
    />
  );
};

EditComment.propTypes = {
  comment_id: PropTypes.number.isRequired,
};
export default EditComment;
