import React from "react";
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

class AddComment extends React.Component {
  state = {
    body: "",
  };
  handleInputChange = (e) =>
    this.setState({
      [e.target.id]: e.target.value,
    });
  handleSubmit = (e) => {
    e.preventDefault();
    const post_id = this.props.match.params.post_id;
    this.props.addComment(this.state, post_id);
    this.setState({ body: "" });
  };
  render() {
    const { body } = this.state;
    const { errors } = this.props;
    return (
      <>
        <StyledWrapper onSubmit={this.handleSubmit}>
          <Textarea
            value={body}
            id="body"
            onChange={this.handleInputChange}
            placeholder="Share your thoughts"
          />
          <StyledButton type="submit" secondary>
            Submit
          </StyledButton>
        </StyledWrapper>
        {errors.body && (
          <StyledValidateError>{errors.body}</StyledValidateError>
        )}
      </>
    );
  }
}

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
