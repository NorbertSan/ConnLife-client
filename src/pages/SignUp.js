import React, { useReducer } from "react";
import styled from "styled-components";
import theme from "utils/theme";
import { Redirect, useHistory } from "react-router-dom";

// COMPONENTS
import Loader from "react-loader-spinner";
import ValidateError from "components/atoms/ValidateError";
import Input from "components/atoms/Input";
import Button from "components/atoms/Button";
import Heading from "components/atoms/Heading";
import Navbar from "components/Navbar/Navbar";

// REDUX STUFF
import { useSelector, useDispatch } from "react-redux";
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

const SignUp = () => {
  const errors = useSelector((state) => state.UI.errorsSignUp);
  const loading = useSelector((state) => state.UI.loadingSignUp);
  const auth = useSelector((state) => state.user.auth);
  const history = useHistory();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createAccount(inputsContent, history));
  };
  const [inputsContent, setInputContent] = useReducer(
    (state, newState) => ({
      ...state,
      ...newState,
    }),
    {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
      nickName: "",
    }
  );

  const handleInputChange = (e) =>
    setInputContent({
      [e.target.name]: e.target.value,
    });
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
              name="email"
              value={inputsContent.email}
              onChange={handleInputChange}
            />
            {errors.email && (
              <StyledValidateError>{errors.email}</StyledValidateError>
            )}
          </StyledInputField>
          <StyledInputField>
            <label>First name:</label>
            <Input
              secondary
              name="firstName"
              value={inputsContent.firstName}
              onChange={handleInputChange}
            />
            {errors.firstName && (
              <StyledValidateError>{errors.firstName}</StyledValidateError>
            )}
          </StyledInputField>
          <StyledInputField>
            <label>Last name:</label>
            <Input
              secondary
              name="lastName"
              value={inputsContent.lastName}
              onChange={handleInputChange}
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
              name="password"
              value={inputsContent.password}
              onChange={handleInputChange}
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
              name="confirmPassword"
              value={inputsContent.confirmPassword}
              onChange={handleInputChange}
            />
          </StyledInputField>
          <StyledInputField>
            <label>Nick name:</label>
            <Input
              secondary
              name="nickName"
              value={inputsContent.nickName}
              onChange={handleInputChange}
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

export default SignUp;
