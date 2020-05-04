import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import EditItemModal from "components/modals/EditItemModal";
// REDUX STUFF
import { useSelector, useDispatch } from "react-redux";
import { editPost as editPostAction } from "redux/actions/dataActions";
import { CLEAR_SET_ERRORS_EDIT_POST } from "redux/types";

const EditPost = ({ post_id }) => {
  const loading = useSelector((state) => state.UI.loadingUpdatePost);
  const posts = useSelector((state) => state.data.posts);
  const errors = useSelector((state) => state.UI.errorsPostEdit);
  const dispatch = useDispatch();
  const [isModalOpen, toggleModalOpen] = useState(false);
  const [body, setBodyValue] = useState("");
  const modalRef = useRef(null);

  useEffect(() => {
    const editPost = posts.find((item) => item.post_id === post_id);
    if (editPost) setBodyValue(editPost.body);
  }, [post_id, posts]);
  useEffect(() => {
    const editPost = posts.find((item) => item.post_id === post_id);
    setBodyValue(editPost.body);
    dispatch({ type: CLEAR_SET_ERRORS_EDIT_POST });
  }, [isModalOpen]);

  const handlePostEdit = () => dispatch(editPostAction({ body }, post_id));

  return (
    <EditItemModal
      errors={errors}
      modalRef={modalRef}
      loading={loading}
      body={body}
      setInputValue={setBodyValue}
      toggleModal={toggleModalOpen}
      isModalOpen={isModalOpen}
      editFunc={handlePostEdit}
    />
  );
};

EditPost.propTypes = {
  post_id: PropTypes.number.isRequired,
};
export default EditPost;
