import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import theme from "utils/theme";
import { Redirect } from "react-router-dom";

// COMPONENTS
import Loader from "react-loader-spinner";
import ValidateError from "components/atoms/ValidateError";
import Input from "components/atoms/Input";
import Button from "components/atoms/Button";
import Heading from "components/atoms/Heading";
import Navbar from "components/Navbar/Navbar";

// REDUX STUFF
import { connect } from "react-redux";
import { createAccount } from "redux/actions/userActions";

const StyledWrapper = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 40px;
  margin: 0 auto;
`;
const StyledInputField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`;
const StyledHeading = styled(Heading)`
  text-align: center;
  margin-bottom: 20px;
  margin-top: 0;
`;
const StyledButton = styled(Button)`
  margin-top: 30px;
  padding-left: 40px;
  padding-right: 40px;
`;
const StyledValidateError = styled(ValidateError)`
  margin-top: 5px;
`;

class SignUp extends React.Component {
  state = {
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    nickName: "",
  };
  handleInputChange = (e) =>
    this.setState({
      [e.target.id]: e.target.value,
    });
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createAccount(this.state, this.props.history);
  };
  render() {
    const {
      email,
      firstName,
      lastName,
      password,
      confirmPassword,
      nickName,
    } = this.state;
    const { errors, loading, auth } = this.props;
    return (
      <>
        <Navbar />
        {auth ? (
          <Redirect to="/" />
        ) : (
          <StyledWrapper autoComplete="off" onSubmit={this.handleSubmit}>
            <StyledHeading>Sign up</StyledHeading>
            <StyledInputField>
              <label>Email:</label>
              <Input
                value={email}
                id="email"
                onChange={this.handleInputChange}
              />
              {errors.email && (
                <StyledValidateError>{errors.email}</StyledValidateError>
              )}
            </StyledInputField>
            <StyledInputField>
              <label>First name:</label>
              <Input
                value={firstName}
                id="firstName"
                onChange={this.handleInputChange}
              />
              {errors.firstName && (
                <StyledValidateError>{errors.firstName}</StyledValidateError>
              )}
            </StyledInputField>
            <StyledInputField>
              <label>Last name:</label>
              <Input
                value={lastName}
                id="lastName"
                onChange={this.handleInputChange}
              />
              {errors.lastName && (
                <StyledValidateError>{errors.lastName}</StyledValidateError>
              )}
            </StyledInputField>
            <StyledInputField>
              <label>Password:</label>
              <Input
                type="password"
                value={password}
                id="password"
                onChange={this.handleInputChange}
              />
              {errors.password && (
                <StyledValidateError>{errors.password}</StyledValidateError>
              )}
            </StyledInputField>
            <StyledInputField>
              <label>Confirm password:</label>
              <Input
                type="password"
                value={confirmPassword}
                id="confirmPassword"
                onChange={this.handleInputChange}
              />
            </StyledInputField>
            <StyledInputField>
              <label>Nick name:</label>
              <Input
                value={nickName}
                id="nickName"
                onChange={this.handleInputChange}
              />
              {errors.nickName && (
                <StyledValidateError>{errors.nickName}</StyledValidateError>
              )}
            </StyledInputField>
            <StyledButton secondary>
              {loading ? (
                <Loader
                  type="Oval"
                  color={theme.colors.primary}
                  height={30}
                  width={30}
                />
              ) : (
                "Create account"
              )}
            </StyledButton>
          </StyledWrapper>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  errors: state.UI.errorsSignUp,
  loading: state.UI.loadingSignUp,
  auth: state.user.auth,
});

SignUp.propTypes = {
  errors: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  createAccount: PropTypes.func.isRequired,
  auth: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, { createAccount })(SignUp);
