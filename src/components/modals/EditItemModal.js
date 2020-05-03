import React from "react";
import styled from "styled-components";
import theme from "utils/theme";
import PropTypes from "prop-types";

// HOOK
import useDetectOutsideClick from "hooks/useDetectOutsideClick";
// COMPONENTS & ICONS
import EditIcon from "assets/icons/edit.svg";
import Button from "components/atoms/Button";
import Textarea from "components/atoms/Textarea";
import Icon from "components/atoms/Icon";
import Loader from "react-loader-spinner";
import ValidateError from "components/atoms/ValidateError";

const StyledButton = styled.div`
  background: none;
  border: none;
  outline: none;
  position: absolute;
  top: 15px;
  right: 0px;
  cursor: pointer;
  font-size: ${theme.fontSize.s};
  text-align: center;
  z-index: 9;
`;
const StyledDeleteBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.3);
  z-index: 2;
`;
const StyledDeleteAlert = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  background: ${theme.colors.tertiary};
  color: ${theme.colors.secondary};
  padding: 25px;
  width: 300px;
  border-radius: 10px;
  border: 1px solid ${theme.colors.primary};
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
`;
const StyledButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 30px;
`;
const StyledValidateError = styled(ValidateError)`
  margin-top: 15px;
`;

const EditItemModal = ({
  modalRef,
  loading,
  errors,
  body,
  setInputValue,
  toggleModal,
  isModalOpen,
  editFunc,
}) => {
  useDetectOutsideClick(modalRef, toggleModal);
  const handleEditFunc = (e) => {
    e.preventDefault();
    editFunc();
  };
  return (
    <>
      <StyledButton onClick={() => toggleModal(true)}>
        <Icon small src={EditIcon} />
      </StyledButton>
      {isModalOpen && (
        <>
          <StyledDeleteBackground />
          <StyledDeleteAlert ref={modalRef}>
            <h4>Update post</h4>
            <Textarea
              value={body}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <StyledButtonsContainer>
              <Button onClick={() => toggleModal(false)} danger tertiary>
                Back
              </Button>
              <Button secondary onClick={handleEditFunc}>
                Edit
              </Button>
            </StyledButtonsContainer>
            {loading && (
              <Loader
                type="ThreeDots"
                color={theme.colors.primary}
                height={40}
                width={40}
              />
            )}
            {errors && errors.success && (
              <StyledValidateError>{errors.success}</StyledValidateError>
            )}
            {errors && errors.body && (
              <StyledValidateError danger>{errors.body}</StyledValidateError>
            )}
          </StyledDeleteAlert>
        </>
      )}
    </>
  );
};

EditItemModal.propTypes = {
  loading: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  modalRef: PropTypes.object.isRequired,
  errors: PropTypes.object,
  isModalOpen: PropTypes.bool.isRequired,
  editFunc: PropTypes.func.isRequired,
  body: PropTypes.string.isRequired,
  setInputValue: PropTypes.func.isRequired,
};

export default EditItemModal;
