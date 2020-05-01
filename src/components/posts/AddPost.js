import React from "react";
import styled from "styled-components";
import theme from "utils/theme";
import PropTypes from "prop-types";
import avatars from "utils/avatars";

// COMPONENTS
import UserIcon from "components/atoms/UserIcon";
import Textarea from "components/atoms/Textarea";
import Button from "components/atoms/Button";
import ValidateError from "components/atoms/ValidateError";

// REDUX STUFF
import { connect } from "react-redux";
import { addPost } from "redux/actions/dataActions";

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  padding-bottom: 30px;
  border-bottom: 1px solid ${theme.colors.primary};
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const StyledButton = styled(Button)`
  align-self: flex-end;
  margin-top: 10px;
`;

const StyledValidateError = styled(ValidateError)`
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);
`;

class AddPost extends React.Component {
  state = {
    body: "",
  };
  handleChange = (e) =>
    this.setState({
      [e.target.id]: e.target.value,
    });
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addPost(this.state);
    this.setState({
      body: "",
    });
  };
  render() {
    const { body } = this.state;
    const { errors, userAvatar } = this.props;
    return (
      <>
        <StyledWrapper>
          <UserIcon src={avatars[userAvatar]} />
          <StyledForm onSubmit={this.handleSubmit}>
            <Textarea
              id="body"
              value={body}
              onChange={this.handleChange}
              placeholder="What's happening ?"
            />
            <StyledButton secondary type="submit">
              Share
            </StyledButton>
          </StyledForm>
          {errors.body && (
            <StyledValidateError>{errors.body}</StyledValidateError>
          )}
        </StyledWrapper>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  errors: state.UI.errorsAddPost,
  userAvatar: state.user.userInfo.avatar,
});

AddPost.propTypes = {
  addPost: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  userAvatar: PropTypes.string,
};

export default connect(mapStateToProps, { addPost })(AddPost);
