import React from "react";
import styled from "styled-components";
import Input from "components/atoms/Input";
import Button from "components/atoms/Button";
import Heading from "components/atoms/Heading";
import ValidateError from "components/atoms/ValidateError";
import Navbar from "components/Navbar/Navbar";

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
`;
const StyledButton = styled(Button)`
  margin-top: 30px;
  padding-left: 40px;
  padding-right: 40px;
`;
const StyledValidateError = styled(ValidateError)`
  text-align: center;
  margin-top: 20px;
`;

class Login extends React.Component {
  state = {
    email: "",
    password: "",
  };
  handleInputChange = (e) =>
    this.setState({
      [e.target.id]: e.target.value,
    });
  render() {
    const { email, password } = this.state;
    return (
      <>
        <Navbar />
        <StyledWrapper autoComplete="off">
          <StyledHeading>Sign in</StyledHeading>
          <StyledInputField>
            <label>Email:</label>
            <Input
              secondary
              value={email}
              id="email"
              onChange={this.handleInputChange}
            />
          </StyledInputField>
          <StyledInputField>
            <label>Password:</label>
            <Input
              secondary
              type="password"
              id="password"
              value={password}
              onChange={this.handleInputChange}
            />
          </StyledInputField>
          <StyledButton secondary>Login</StyledButton>
          <StyledValidateError>Wrong credentials</StyledValidateError>
        </StyledWrapper>
      </>
    );
  }
}

export default Login;
