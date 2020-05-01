import React from "react";
import styled, { keyframes } from "styled-components";
import theme from "utils/theme";
import PropTypes from "prop-types";

// COMPONENTS
import Input from "components/atoms/Input";
import Button from "components/atoms/Button";
import Textarea from "components/atoms/Textarea";
import ValidateError from "components/atoms/ValidateError";
import Loader from "react-loader-spinner";

// REDUX STUFF
import { connect } from "react-redux";
import { updateProfile } from "redux/actions/userActions";

const appear = keyframes`
  0%{
    transform: translate(-50%, -35%);
    opacity: 0;
  } 100%{
    opacity: 1;
      transform: translate(-50%, -50%);
  }
`;

const StyledForm = styled.form`
  padding: 30px 15px 15px 15px;
  height: 400px;
  width: 300px;
  background: ${theme.colors.tertiary};
  position: fixed;
  border: 1px solid ${theme.colors.primary};
  border-radius: 10px;
  left: 50%;
  top: 50%;
  z-index: 999;
  animation: ${appear} 0.5s ease-in-out 1 forwards;
`;
const InputFied = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`;
const StyledLabel = styled.label`
  font-weight: ${theme.fontWeight.bold};
  text-transform: uppercase;
  margin-bottom: 5px;
  font-size: ${theme.fontSize.s};
`;
const StyledButton = styled(Button)`
  margin-top: 30px;
  padding: 0;
  width: 100px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledValidateError = styled(ValidateError)`
  display: block;
  text-align: center;
  margin-top: 10px;
`;
const StyledXButton = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
`;

class UpdateProfile extends React.Component {
  state = {
    bio: "",
    website: "",
  };
  componentDidMount() {
    let { website, bio } = this.props.userInfo;
    if (website === null) website = "";
    if (bio === null) bio = "";
    this.setState({ bio, website });
  }
  handleChangeInput = (e) =>
    this.setState({
      [e.target.id]: e.target.value,
    });
  handleSubmit = (e) => {
    e.preventDefault();
    const { bio, website } = this.state;
    let data = {
      bio,
      website,
    };
    if (website.includes("http")) data.website = website.split("//")[1];
    this.props.updateProfile(data);
  };
  render() {
    const { isOpen, closeProfile, errors, loading } = this.props;
    const { bio, website } = this.state;
    return (
      <StyledForm
        onSubmit={this.handleSubmit}
        autoComplete="off"
        isOpen={isOpen}
      >
        <StyledXButton
          onClick={(e) => {
            e.preventDefault();
            closeProfile();
          }}
          type="none"
        >
          X
        </StyledXButton>
        <InputFied>
          <StyledLabel>Biography:</StyledLabel>
          <Textarea
            type="text"
            id="bio"
            value={bio}
            onChange={this.handleChangeInput}
            placeholder="Tell us about yourself"
          />
        </InputFied>
        <InputFied>
          <StyledLabel>Website:</StyledLabel>
          <Input
            type="text"
            id="website"
            value={website}
            onChange={this.handleChangeInput}
            placeholder="website.com"
          />
        </InputFied>
        <StyledButton secondary type="submit">
          {loading ? (
            <Loader
              type="BallTriangle"
              color={theme.colors.primary}
              height={30}
              width={30}
            />
          ) : (
            "Update"
          )}
        </StyledButton>
        {errors.success && (
          <StyledValidateError>{errors.success}</StyledValidateError>
        )}
        {errors.bio && (
          <StyledValidateError danger>{errors.bio}</StyledValidateError>
        )}
        {errors.website && (
          <StyledValidateError danger>{errors.website}</StyledValidateError>
        )}
      </StyledForm>
    );
  }
}

const mapStateToProps = (state) => ({
  userInfo: state.user.userInfo,
  errors: state.UI.errorsUpdateProfile,
  loading: state.UI.loadingUpdateProfile,
});

UpdateProfile.propTypes = {
  userInfo: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  closeProfile: PropTypes.func.isRequired,
  updateProfile: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, { updateProfile })(UpdateProfile);
