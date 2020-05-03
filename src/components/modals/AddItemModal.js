import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import theme from "utils/theme";
import PropTypes from "prop-types";

// COMPONENTS
import UserIcon from "components/atoms/UserIcon";
import Textarea from "components/atoms/Textarea";
import Button from "components/atoms/Button";
import ValidateError from "components/atoms/ValidateError";

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  padding: 30px 10px;
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

const StyledValidateError = styled(ValidateError)`
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);
`;

const AddItemModal = ({
  errors,
  setBodyValue,
  body,
  avatar,
  addItemFunc,
  placeholder,
}) => {
  const handleAddItem = (e) => {
    e.preventDefault();
    addItemFunc();
  };
  const textRef = useRef(null);
  useEffect(() => {
    textRef.current.focus();
  }, []);
  return (
    <>
      <StyledWrapper>
        {avatar && <UserIcon src={avatar} />}
        <StyledForm onSubmit={handleAddItem}>
          <Textarea
            ref={textRef}
            value={body}
            onChange={(e) => setBodyValue(e.target.value)}
            placeholder={placeholder}
          />
          <StyledButton secondary type="submit">
            Share
          </StyledButton>
        </StyledForm>
        {errors.body && (
          <StyledValidateError>{errors.body}</StyledValidateError>
        )}
      </StyledWrapper>
    </>
  );
};

AddItemModal.propTypes = {
  errors: PropTypes.object.isRequired,
  setBodyValue: PropTypes.func.isRequired,
  body: PropTypes.string.isRequired,
  addItemFunc: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  avatar: PropTypes.string,
};

export default AddItemModal;
