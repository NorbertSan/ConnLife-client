import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

// COMPONENTS
import Textarea from "components/atoms/Textarea";
import Button from "components/atoms/Button";
import ValidateError from "components/atoms/ValidateError";

// REDUX STUFF
import { connect } from "react-redux";
import { compose } from "redux";
import { addComment } from "redux/actions/dataActions";

const StyledWrapper = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
const StyledButton = styled(Button)`
  align-self: flex-start;
  margin-top: 15px;
`;
const StyledValidateError = styled(ValidateError)`
  text-align: center;
`;
const AddComment = ({ errors, match, addComment }) => {
  const [body, setBodyValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const post_id = match.params.post_id;
    addComment({ body }, post_id);
    setBodyValue("");
  };
  return (
    <>
      <StyledWrapper onSubmit={handleSubmit}>
        <Textarea
          value={body}
          onChange={(e) => setBodyValue(e.target.value)}
          placeholder="Share your thoughts"
        />
        <StyledButton type="submit" secondary>
          Submit
        </StyledButton>
      </StyledWrapper>
      {errors.body && <StyledValidateError>{errors.body}</StyledValidateError>}
    </>
  );
};

const mapStateToProps = (state) => ({
  errors: state.UI.errorsAddComment,
});

AddComment.propTypes = {
  addComment: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default compose(
  connect(mapStateToProps, { addComment }),
  withRouter
)(AddComment);
