import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

import RemoveItemModal from "components/modals/RemoveItemModal";

// REDUX STUFF
import { useSelector, useDispatch } from "react-redux";
import { removeComment } from "redux/actions/dataActions";

const RemoveComment = ({ comment_id }) => {
  const [isModalOpen, toggleModalOpen] = useState(false);
  const loading = useSelector((state) => state.UI.loadingRemoveComment);
  const dispatch = useDispatch();
  const modalRef = useRef(null);
  const handleRemoveComment = () => dispatch(removeComment(comment_id));
  return (
    <RemoveItemModal
      loading={loading}
      toggleModalOpen={toggleModalOpen}
      modalRef={modalRef}
      isModalOpen={isModalOpen}
      removeItemFunc={handleRemoveComment}
    />
  );
};
RemoveComment.propTypes = {
  comment_id: PropTypes.number.isRequired,
};

export default RemoveComment;
