import React, { useReducer } from "react";
import styled from "styled-components";
import theme from "utils/theme";
import { Redirect, useHistory } from "react-router-dom";

// COMPONENTS
import Loader from "react-loader-spinner";
import Navbar from "components/Navbar/Navbar";
import Input from "components/atoms/Input";
import Button from "components/atoms/Button";
import Heading from "components/atoms/Heading";
import ValidateError from "components/atoms/ValidateError";
import SuccessAlert from "components/atoms/SuccessAlert";

// REDUX STUFF
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "redux/actions/userActions";

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
`;
const StyledButton = styled(Button)`
  margin-top: 30px;
  padding: 0;
  width: 100px;
  height: 40px;
`;
const StyledValidateError = styled(ValidateError)`
  text-align: center;
  margin-top: 20px;
`;

const Login = () => {
  const errors = useSelector((state) => state.UI.errorsLogin);
  const successAlert = useSelector((state) => state.UI.successAlert);
  const loading = useSelector((state) => state.UI.loadingLogin);
  const auth = useSelector((state) => state.user.auth);
  const dispatch = useDispatch();
  const history = useHistory();
  const [inputsContent, setInputsContent] = useReducer(
    (state, newState) => ({
      ...state,
      ...newState,
    }),
    {
      email: "",
      password: "",
    }
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(inputsContent, history));
    setInputsContent({
      email: "",
      password: "",
    });
  };
  const handleInputChange = (e) =>
    setInputsContent({
      [e.target.name]: e.target.value,
    });
  return (
    <>
      {auth ? (
        <Redirect to="/" />
      ) : (
        <>
          <Navbar />
          {successAlert.general && (
            <SuccessAlert>{successAlert.general}</SuccessAlert>
          )}
          <StyledWrapper autoComplete="off" onSubmit={handleSubmit}>
            <StyledHeading>Sign in</StyledHeading>
            <StyledInputField>
              <label>Email:</label>
              <Input
                secondary
                name="email"
                value={inputsContent.email}
                onChange={handleInputChange}
              />
            </StyledInputField>
            <StyledInputField>
              <label>Password:</label>
              <Input
                secondary
                name="password"
                type="password"
                value={inputsContent.password}
                onChange={handleInputChange}
              />
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
                "login"
              )}
            </StyledButton>
            {errors.general && (
              <StyledValidateError>{errors.general}</StyledValidateError>
            )}
          </StyledWrapper>
        </>
      )}
    </>
  );
};

export default Login;
