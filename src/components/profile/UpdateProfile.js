import React from "react";
import styled, { css } from "styled-components";
import theme from "utils/theme";
import Input from "components/atoms/Input";
import Button from "components/atoms/Button";
import XButton from "components/atoms/XButton";
import Textarea from "components/atoms/Textarea";

const StyledWrapper = styled.form`
  padding: 30px 15px 15px 15px;
  height: 400px;
  width: 300px;
  background: ${theme.colors.secondary};
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -40%);
  border: 1px solid ${theme.colors.secondary};
  border-radius: 10px;
  z-index: -1;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease-in-out;
  ${({ isOpen }) =>
    isOpen &&
    css`
      z-index: 999;
      opacity: 1;
      pointer-events: all;
      transform: translate(-50%, -50%);
    `}
`;
const InputFied = styled.div`
  display: flex;
  flex-direction: column;
  color: ${theme.colors.tertiary};
  margin-bottom: 25px;
`;
const StyledLabel = styled.label`
  font-weight: ${theme.fontWeight.bold};
  text-transform: uppercase;
  margin-bottom: 5px;
  font-size: ${theme.fontSize.s};
`;
const StyledButton = styled(Button)`
  margin-top: 60px;
  width: 60%;
`;

class UpdateProfile extends React.Component {
  state = {
    bio: "",
    website: "",
  };
  handleChangeInput = (e) =>
    this.setState({
      [e.target.id]: e.target.value,
    });
  render() {
    const { isOpen, closeProfile } = this.props;
    const { bio, website } = this.state;
    return (
      <StyledWrapper isOpen={isOpen}>
        <XButton
          tertiaryColor
          onClick={(e) => {
            e.preventDefault();
            closeProfile();
          }}
          type="none"
        >
          X
        </XButton>
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
            placeholder="e.g http://website.com"
          />
        </InputFied>
        <StyledButton tertiary secondary type="submit">
          Update
        </StyledButton>
      </StyledWrapper>
    );
  }
}

export default UpdateProfile;
