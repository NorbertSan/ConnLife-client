import React, { useState } from "react";
import { useParams } from "react-router-dom";
import AddItemModal from "components/modals/AddItemModal";

// REDUX STUFF
import { useSelector, useDispatch } from "react-redux";
import { addComment } from "redux/actions/dataActions";

const AddComment = () => {
  const { post_id } = useParams();
  const [body, setBodyValue] = useState("");
  const errors = useSelector((state) => state.UI.errorsAddComment);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(addComment({ body }, post_id));
    setBodyValue("");
  };
  return (
    <AddItemModal
      errors={errors}
      setBodyValue={setBodyValue}
      body={body}
      addItemFunc={handleSubmit}
      placeholder="Share your thoughts"
    />
  );
};

export default AddComment;
