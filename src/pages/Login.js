import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import theme from "utils/theme";
import { Redirect } from "react-router-dom";

// COMPONENTS
import Loader from "react-loader-spinner";
import Navbar from "components/Navbar/Navbar";
import Input from "components/atoms/Input";
import Button from "components/atoms/Button";
import Heading from "components/atoms/Heading";
import ValidateError from "components/atoms/ValidateError";
import SuccessAlert from "components/atoms/SuccessAlert";

// REDUX STUFF
import { connect } from "react-redux";
import { loginUser } from "redux/actions/userActions";

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
  padding: 0;
  width: 100px;
  height: 40px;
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
  handleSubmit = (e) => {
    e.preventDefault();
    const credentials = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(credentials, this.props.history);
    this.setState({
      email: "",
      password: "",
    });
  };
  render() {
    const { email, password } = this.state;
    const { errors, loading, successAlert, auth } = this.props;
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
            <StyledWrapper autoComplete="off" onSubmit={this.handleSubmit}>
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
  }
}

const mapStateToProps = (state) => ({
  errors: state.UI.errorsLogin,
  successAlert: state.UI.successAlert,
  loading: state.UI.loadingLogin,
  auth: state.user.auth,
});

Login.propTypes = {
  errors: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  loginUser: PropTypes.func.isRequired,
  successAlert: PropTypes.object.isRequired,
  auth: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, { loginUser })(Login);
