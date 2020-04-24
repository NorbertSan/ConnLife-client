import React from "react";
import styled from "styled-components";
import noFaceIcon from "assets/images/no-face.png";
import UserIcon from "components/atoms/UserIcon";
import Textarea from "components/atoms/Textarea";
import Button from "components/atoms/Button";
import theme from "utils/theme";

const StyledWrapper = styled.div`
  display: flex;
  padding-bottom: 30px;
  border-bottom: 1px solid ${theme.colors.primary};
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const StyledButton = styled(Button)`
  align-self: flex-end;
  margin-top: 10px;
`;

const AddPost = () => (
  <StyledWrapper>
    <UserIcon src={noFaceIcon} />
    <StyledForm>
      <Textarea placeholder="What's happening ?" />
      <StyledButton>Share</StyledButton>
    </StyledForm>
  </StyledWrapper>
);

export default AddPost;
