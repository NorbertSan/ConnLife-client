import React from "react";
import styled from "styled-components";
import Textarea from "components/atoms/Textarea";
import Button from "components/atoms/Button";

const StyledWrapper = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
const StyledButton = styled(Button)`
  align-self: flex-start;
  margin-top: 15px;
`;

class AddComment extends React.Component {
  state = {
    body: "",
  };
  handleInputChange = (e) =>
    this.setState({
      [e.target.id]: e.target.value,
    });
  render() {
    const { body } = this.state;
    return (
      <StyledWrapper>
        <Textarea
          value={body}
          onChange={this.handleInputChange}
          placeholder="Share your thoughts"
        />
        <StyledButton secondary>Submit</StyledButton>
      </StyledWrapper>
    );
  }
}

export default AddComment;
