import React from "react";
import styled from "styled-components";
import ValidateError from "components/atoms/ValidateError";
import Input from "components/atoms/Input";
import Button from "components/atoms/Button";
import Heading from "components/atoms/Heading";
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
  margin-top: 0;
`;
const StyledButton = styled(Button)`
  margin-top: 30px;
  padding-left: 40px;
  padding-right: 40px;
`;
const StyledValidateError = styled(ValidateError)`
  margin-top: 2px;
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
  render() {
    const {
      email,
      firstName,
      lastName,
      password,
      confirmPassword,
      nickName,
    } = this.state;
    return (
      <>
        <Navbar />
        <StyledWrapper autoComplete="off">
          <StyledHeading>Sign up</StyledHeading>
          <StyledInputField>
            <label>Email:</label>
            <Input value={email} id="email" onChange={this.handleInputChange} />
            <StyledValidateError>Bad format</StyledValidateError>
          </StyledInputField>
          <StyledInputField>
            <label>First name:</label>
            <Input
              value={firstName}
              id="firstName"
              onChange={this.handleInputChange}
            />
          </StyledInputField>
          <StyledInputField>
            <label>Last name:</label>
            <Input
              value={lastName}
              id="lastName"
              onChange={this.handleInputChange}
            />
          </StyledInputField>
          <StyledInputField>
            <label>Password:</label>
            <Input
              value={password}
              id="password"
              onChange={this.handleInputChange}
            />
          </StyledInputField>
          <StyledInputField>
            <label>Confirm password:</label>
            <Input
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
          </StyledInputField>
          <StyledButton>Create account</StyledButton>
        </StyledWrapper>
      </>
    );
  }
}

export default SignUp;
