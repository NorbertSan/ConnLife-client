import React, { useState } from "react";
import avatars from "utils/avatars";

import AddItemModal from "components/modals/AddItemModal";

// REDUX STUFF
import { useSelector, useDispatch } from "react-redux";
import { addPost } from "redux/actions/dataActions";

const AddPost = () => {
  const errors = useSelector((state) => state.UI.errorsAddPost);
  const userAvatar = useSelector((state) => state.user.userInfo.avatar);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(addPost({ body }));
    setBodyValue("");
  };
  const [body, setBodyValue] = useState("");
  return (
    <AddItemModal
      errors={errors}
      setBodyValue={setBodyValue}
      body={body}
      avatar={avatars[userAvatar]}
      addItemFunc={handleSubmit}
      placeholder="What's happening"
    />
  );
};

export default AddPost;
