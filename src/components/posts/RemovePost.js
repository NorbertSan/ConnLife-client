import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import RemoveItemModal from "components/modals/RemoveItemModal";

// REDUX STUFF
import { useSelector, useDispatch } from "react-redux";
import { removePost } from "redux/actions/dataActions";

const RemovePost = ({ post_id }) => {
  const loading = useSelector((state) => state.UI.loadingRemovePost);
  const dispatch = useDispatch();
  const [isModalOpen, toggleModalOpen] = useState(false);
  const handleRemovePost = () => dispatch(removePost(post_id));
  const modalRef = useRef(null);
  return (
    <RemoveItemModal
      loading={loading}
      toggleModalOpen={toggleModalOpen}
      modalRef={modalRef}
      isModalOpen={isModalOpen}
      removeItemFunc={handleRemovePost}
    />
  );
};

RemovePost.propTypes = {
  post_id: PropTypes.number.isRequired,
};

export default RemovePost;
