import React, { useState } from "react";
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
  max-width: 560px;
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

const SignUp = ({ createAccount, history, errors, loading, auth }) => {
  const [email, setEmailValue] = useState("");
  const [firstName, setFirstNameValue] = useState("");
  const [lastName, setLastNameValue] = useState("");
  const [password, setPasswordValue] = useState("");
  const [confirmPassword, setConfirmPasswordValue] = useState("");
  const [nickName, setNickNameValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    createAccount(
      { email, firstName, lastName, password, confirmPassword, nickName },
      history
    );
  };
  return (
    <>
      <Navbar />
      {auth ? (
        <Redirect to="/" />
      ) : (
        <StyledWrapper autoComplete="off" onSubmit={handleSubmit}>
          <StyledHeading>Sign up</StyledHeading>
          <StyledInputField>
            <label>Email:</label>
            <Input
              secondary
              value={email}
              onChange={(e) => setEmailValue(e.target.value)}
            />
            {errors.email && (
              <StyledValidateError>{errors.email}</StyledValidateError>
            )}
          </StyledInputField>
          <StyledInputField>
            <label>First name:</label>
            <Input
              secondary
              value={firstName}
              onChange={(e) => setFirstNameValue(e.target.value)}
            />
            {errors.firstName && (
              <StyledValidateError>{errors.firstName}</StyledValidateError>
            )}
          </StyledInputField>
          <StyledInputField>
            <label>Last name:</label>
            <Input
              secondary
              value={lastName}
              onChange={(e) => setLastNameValue(e.target.value)}
            />
            {errors.lastName && (
              <StyledValidateError>{errors.lastName}</StyledValidateError>
            )}
          </StyledInputField>
          <StyledInputField>
            <label>Password:</label>
            <Input
              secondary
              type="password"
              value={password}
              onChange={(e) => setPasswordValue(e.target.value)}
            />
            {errors.password && (
              <StyledValidateError>{errors.password}</StyledValidateError>
            )}
          </StyledInputField>
          <StyledInputField>
            <label>Confirm password:</label>
            <Input
              secondary
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPasswordValue(e.target.value)}
            />
          </StyledInputField>
          <StyledInputField>
            <label>Nick name:</label>
            <Input
              secondary
              value={nickName}
              onChange={(e) => setNickNameValue(e.target.value)}
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
};

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
